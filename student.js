// ============================================
// student-simple.js - Упрощенная версия для ученика
// ============================================

let currentGameId = null;
let playerName = null;
let currentQuestion = null;
let hasAnswered = false;

// Основные функции (аналогичные тем, что в student.html)
function joinGame() {
    const name = document.getElementById('playerName').value.trim();
    const code = document.getElementById('gameCode').value.trim();
    
    if (!name || name.length < 2) {
        alert("Введите имя (минимум 2 символа)");
        return;
    }
    
    if (!code || code.length !== 8 || !/^\d+$/.test(code)) {
        alert("Введите 8 цифр кода игры");
        return;
    }
    
    playerName = name;
    currentGameId = "game_" + code;
    
    // Проверить игру
    db.ref(`games/${currentGameId}`).once('value').then(snapshot => {
        if (!snapshot.exists()) {
            alert("Игра не найдена!");
            return;
        }
        
        const game = snapshot.val();
        
        // Проверить уникальность имени
        if (game.players && game.players[name]) {
            alert("Игрок с таким именем уже есть!");
            return;
        }
        
        // Зарегистрироваться
        const playerData = {
            name: name,
            joined: Date.now(),
            score: 0,
            device: /Mobi|Android/i.test(navigator.userAgent) ? "📱 Телефон" : "💻 Компьютер"
        };
        
        db.ref(`games/${currentGameId}/players/${name}`).set(playerData).then(() => {
            // Переключить экран
            switchScreen('waiting');
            
            // Слушать игру
            listenToGame();
            
        }).catch(error => {
            alert("Ошибка: " + error.message);
        });
        
    }).catch(error => {
        alert("Ошибка сети: " + error.message);
    });
}

function listenToGame() {
    if (!currentGameId) return;
    
    db.ref(`games/${currentGameId}`).on('value', snapshot => {
        const game = snapshot.val();
        if (!game) {
            console.log("Игра удалена");
            leaveGame();
            return;
        }
        
        const currentQuestionId = game.currentQuestion;
        
        switch (game.status) {
            case "lobby":
            case "waiting":
                handleLobby();
                break;
                
            case "question_active":
                if (currentQuestionId && (!currentQuestion || currentQuestion.id !== currentQuestionId || !hasAnswered)) {
                    handleQuestionActive(game, currentQuestionId);
                }
                break;
                
            case "showing_results":
                handleShowingResults(game, currentQuestionId);
                break;
        }
    });
}

function handleQuestionActive(game, questionId) {
    currentQuestion = QUIZ_DATA.questions.find(q => q.id === questionId);
    if (!currentQuestion) return;
    
    hasAnswered = false;
    
    switchScreen('question');
    displayQuestion(currentQuestion);
}

function selectAnswer(answerIndex) {
    if (hasAnswered || !currentQuestion || !currentGameId || !playerName) return;
    
    hasAnswered = true;
    
    // Простая проверка правильности
    const isCorrect = (answerIndex === currentQuestion.correct);
    
    const answerData = {
        answerIndex: answerIndex,
        isCorrect: isCorrect,
        timestamp: Date.now()
    };
    
    db.ref(`games/${currentGameId}/answers/${currentQuestion.id}/${playerName}`).set(answerData).then(() => {
        if (isCorrect) {
            db.ref(`games/${currentGameId}/players/${playerName}/score`).transaction(score => {
                return (score || 0) + (currentQuestion.points || 1);
            });
        }
    });
}

function leaveGame() {
    if (currentGameId && playerName) {
        try {
            db.ref(`games/${currentGameId}/players/${playerName}`).remove();
        } catch (e) {}
    }
    
    resetGameState();
    switchScreen('join');
}

// Вспомогательные функции
function switchScreen(screenName) {
    ['join', 'waiting', 'question', 'result'].forEach(screen => {
        document.getElementById(screen + 'Screen').style.display = 'none';
    });
    document.getElementById(screenName + 'Screen').style.display = 'block';
}

function resetGameState() {
    currentGameId = null;
    playerName = null;
    currentQuestion = null;
    hasAnswered = false;
}

// Экспорт для использования в HTML
window.joinGame = joinGame;
window.leaveGame = leaveGame;
window.selectAnswer = selectAnswer;
