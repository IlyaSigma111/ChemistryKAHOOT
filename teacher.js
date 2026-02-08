// ============================================
// teacher-simple.js - Упрощенная версия для учителя
// ============================================

let currentGameId = null;
let currentQuestionIndex = 0;

function startNewGame() {
    const code = Math.floor(10000000 + Math.random() * 90000000).toString();
    currentGameId = "game_" + code;
    currentQuestionIndex = 0;
    
    // Создать игру в Firebase
    const gameData = {
        id: currentGameId,
        created: Date.now(),
        status: "lobby",
        quizId: QUIZ_DATA.id,
        currentQuestion: null,
        players: {},
        answers: {}
    };
    
    db.ref('games/' + currentGameId).set(gameData).then(() => {
        alert("🎮 Игра создана! Код: " + code);
        
        // Начать слушать игроков
        listenToPlayers();
        
        // Обновить список вопросов
        updateQuestionsList();
    });
}

function startNextQuestion() {
    if (!currentGameId) {
        alert("Сначала создайте игру!");
        return;
    }
    
    const question = QUIZ_DATA.questions[currentQuestionIndex];
    if (!question) {
        alert("🎉 Все вопросы пройдены!");
        return;
    }
    
    // Очистить старые ответы
    db.ref(`games/${currentGameId}/answers/${question.id}`).remove();
    
    // Обновить статус игры
    db.ref('games/' + currentGameId).update({
        status: "question_active",
        currentQuestion: question.id,
        questionStartTime: Date.now()
    }).then(() => {
        currentQuestionIndex++;
        updateQuestionsList();
        alert(`Вопрос ${currentQuestionIndex} запущен`);
    });
}

function showAnswer() {
    const question = QUIZ_DATA.questions[currentQuestionIndex - 1];
    if (!question) return;
    
    // Переключить статус
    if (currentGameId) {
        db.ref('games/' + currentGameId).update({
            status: "showing_results"
        });
    }
    
    alert(`Правильный ответ: ${question.options[question.correct]}`);
}

function resetGame() {
    if (confirm("Удалить текущую игру?")) {
        if (currentGameId) {
            db.ref('games/' + currentGameId).remove();
        }
        
        currentGameId = null;
        currentQuestionIndex = 0;
        alert("Игра сброшена");
    }
}

function listenToPlayers() {
    if (!currentGameId) return;
    
    db.ref(`games/${currentGameId}/players`).on('value', snapshot => {
        const players = snapshot.val() || {};
        const playerArray = Object.entries(players).map(([name, data]) => ({
            name,
            ...data
        }));
        
        updatePlayersList(playerArray);
    });
}

function updatePlayersList(players) {
    const container = document.getElementById('playersList');
    if (!container) return;
    
    if (players.length === 0) {
        container.innerHTML = '<p>Нет игроков</p>';
        return;
    }
    
    players.sort((a, b) => (b.score || 0) - (a.score || 0));
    
    container.innerHTML = players.map(player => `
        <div class="player-card">
            <strong>${player.name}</strong>
            <span>${player.score || 0} очков</span>
        </div>
    `).join('');
}

function updateQuestionsList() {
    const container = document.getElementById('questionsList');
    if (!container || !QUIZ_DATA) return;
    
    container.innerHTML = QUIZ_DATA.questions.map((q, index) => {
        const isCurrent = index === currentQuestionIndex - 1;
        const isCompleted = index < currentQuestionIndex - 1;
        
        return `
            <div class="question-item ${isCurrent ? 'active' : isCompleted ? 'completed' : ''}">
                <strong>Вопрос ${index + 1}</strong>
                ${isCurrent ? '🔴' : isCompleted ? '✅' : '⏳'}
            </div>
        `;
    }).join('');
}

// Экспорт для использования в HTML
window.startNewGame = startNewGame;
window.startNextQuestion = startNextQuestion;
window.showAnswer = showAnswer;
window.resetGame = resetGame;
