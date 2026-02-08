// ============================================
// firebase-config.js - ХИМИЯ: КРЕМНИЙ (Glass Design)
// ============================================

// 🔥 КОНФИГУРАЦИЯ FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyACG4cF42ooa-oDr1H9dk9ShOvu54OSJz0",
  authDomain: "chemistrykahoot-7efb3.firebaseapp.com",
  projectId: "chemistrykahoot-7efb3",
  storageBucket: "chemistrykahoot-7efb3.firebasestorage.app",
  messagingSenderId: "1027463768295",
  appId: "1:1027463768295:web:42b8e3e15226fc56a29a42"
};

// Инициализация Firebase
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(fbaseConfig);
    }
    window.db = firebase.database();
    console.log("✅ Firebase инициализирован");
} catch (error) {
    console.error("❌ Ошибка Firebase:", error);
    alert("Ошибка подключения к базе данных. Проверьте консоль.");
}

// 📚 30 ВОПРОСОВ ПО ХИМИИ (ТЕМА: КРЕМНИЙ)
window.QUIZ_DATA = {
    id: "chemistry_silicon",
    title: "Химия: Кремний и его соединения",
    description: "30 вопросов разной сложности по теме Кремний",
    subject: "Химия",
    author: "Учитель химии",
    version: "2024.1",
    questions: [
        // ЛЁГКИЕ ВОПРОСЫ (1-10)
        {
            id: 1,
            type: "easy",
            text: "Сколько электронов на внешней оболочке у кремния?",
            options: ["1) 3", "2) 5", "3) 4", "4) 2"],
            correct: 2,
            explanation: "У кремния 4 электрона на внешней оболочке (элемент IV группы).",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 2,
            type: "easy",
            text: "Каков атомный номер кремния?",
            options: ["1) 12", "2) 14", "3) 16", "4) 10"],
            correct: 1,
            explanation: "Атомный номер кремния - 14.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 3,
            type: "easy",
            text: "Какой минерал состоит из кремния?",
            options: ["1) Кварц", "2) Пирит", "3) Флюорит", "4) Кальцит"],
            correct: 0,
            explanation: "Кварц (SiO₂) - минерал, состоящий из кремния и кислорода.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 4,
            type: "easy",
            text: "Какая высшая степень окисления у кремния?",
            options: ["1) +3", "2) +6", "3) +4", "4) +2"],
            correct: 2,
            explanation: "Высшая степень окисления кремния +4.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 5,
            type: "easy",
            text: "Какая низшая степень окисления у кремния?",
            options: ["1) 0", "2) -1", "3) +2", "4) -4"],
            correct: 3,
            explanation: "Низшая степень окисления кремния -4.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 6,
            type: "easy",
            text: "Как называются соли кремниевой кислоты?",
            options: ["1) Сульфаты", "2) Силикаты", "3) Фосфаты", "4) Карбонаты"],
            correct: 1,
            explanation: "Соли кремниевой кислоты называются силикаты.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 7,
            type: "easy",
            text: "На какой химической формуле строится большинство соединений кремния?",
            options: ["1) SiO₂", "2) SiO", "3) SiO₄", "4) Si₂O"],
            correct: 0,
            explanation: "Большинство соединений кремния строятся на основе SiO₂.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 8,
            type: "easy",
            text: "На каком месте стоит кремний по распространению на Земле?",
            options: ["1) на 4", "2) на 1", "3) на 3", "4) на 2"],
            correct: 3,
            explanation: "Кремний - второй по распространённости элемент в земной коре после кислорода.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 9,
            type: "easy",
            text: "В какой группе находится кремний?",
            options: ["1) в 6", "2) в 3", "3) в 4", "4) в 5"],
            correct: 2,
            explanation: "Кремний находится в IV группе периодической системы.",
            points: 1,
            difficulty: "easy"
        },
        {
            id: 10,
            type: "easy",
            text: "Как по латински будет кремний?",
            options: ["1) Silicium", "2) Selicium", "3) Sillicium", "4) Si"],
            correct: 0,
            explanation: "Латинское название кремния - Silicium.",
            points: 1,
            difficulty: "easy"
        },
        // СРЕДНИЕ ВОПРОСЫ (11-20)
        {
            id: 11,
            type: "medium",
            text: "Что образуется при реакции кремния с металлами?",
            options: ["1) Силикаты", "2) Силициды", "3) Силаны", "4) он не реагирует с металлами"],
            correct: 1,
            explanation: "При реакции кремния с металлами образуются силициды.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 12,
            type: "medium",
            text: "Какие химические свойства у кремния?",
            options: ["1) окислительные", "2) окислительные и восстановительные", "3) восстановительные", "4) ни восстановительные, ни окислительные"],
            correct: 1,
            explanation: "Кремний проявляет как окислительные, так и восстановительные свойства.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 13,
            type: "medium",
            text: "Как изменяются неметаллические свойства в ряду C → Si → Ge?",
            options: ["1) Не изменяются", "2) Усиливаются", "3) Ослабевают"],
            correct: 2,
            explanation: "Неметаллические свойства ослабевают при движении вниз по группе.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 14,
            type: "medium",
            text: "Оксид кремния (IV) относится к:",
            options: ["1) основным оксидам", "2) амфотерным оксидам", "3) кислотным оксидам", "4) безразличным оксидам"],
            correct: 2,
            explanation: "SiO₂ - кислотный оксид, образует кремниевую кислоту.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 15,
            type: "medium",
            text: "С каким веществом кремний проявляет восстановительные свойства?",
            options: ["1) Железо", "2) Натрий", "3) Вода", "4) Фтор"],
            correct: 3,
            explanation: "С фтором кремний проявляет восстановительные свойства.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 16,
            type: "medium",
            text: "Выбери формулу силана:",
            options: ["1) SiH₄", "2) SiO₂", "3) H₂SiO₃", "4) Mg₂Si"],
            correct: 0,
            explanation: "Формула силана - SiH₄.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 17,
            type: "medium",
            text: "Оксид кремния (IV) реагирует с веществом:",
            options: ["1) LiOH", "2) HNO₃", "3) NaCl", "4) KNO₃"],
            correct: 0,
            explanation: "SiO₂ реагирует с щелочами, например с LiOH.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 18,
            type: "medium",
            text: "Выбери формулу силикагеля:",
            options: ["1) SiH₄", "2) SiO₂", "3) CaSiO₃", "4) Mg₂Si"],
            correct: 1,
            explanation: "Силикагель - высушенный гель кремниевой кислоты, формула SiO₂.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 19,
            type: "medium",
            text: "Превращение CaO → CaSiO₃ можно осуществить с помощью:",
            options: ["1) Na₂CO₃", "2) SiH₄", "3) SiO₂", "4) Si"],
            correct: 2,
            explanation: "CaO + SiO₂ → CaSiO₃.",
            points: 2,
            difficulty: "medium"
        },
        {
            id: 20,
            type: "medium",
            text: "Оксид кремния (IV) применяется:",
            options: ["1) для приготовления бетона", "2) для изготовления электродов", "3) в качестве силикатного клея", "4) в металлургической промышленности"],
            correct: 0,
            explanation: "SiO₂ используется для приготовления бетона.",
            points: 2,
            difficulty: "medium"
        },
        // СЛОЖНЫЕ ВОПРОСЫ (21-30)
        {
            id: 21,
            type: "hard",
            text: "Как применяется кремний?",
            options: ["1) в качестве полупроводника", "2) в качестве твёрдой смазки в подшипниках", "3) в производстве цемента", "4) для производства стекла"],
            correct: 0,
            explanation: "Кремний широко применяется в качестве полупроводника в электронике.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 22,
            type: "hard",
            text: "Укажи характеристику кремния:",
            options: ["1) имеет запах", "2) бесцветный газ без запаха", "3) легкоплавкое твердое вещество", "4) в результате реакции с металлами образуются силициды"],
            correct: 3,
            explanation: "Кремний образует силициды при реакции с металлами.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 23,
            type: "hard",
            text: "Отметь формулу вещества, образующего силикатный клей:",
            options: ["1) CaSiO₃", "2) H₂SiO₃", "3) Na₂SiO₃", "4) SiO₂"],
            correct: 2,
            explanation: "Силикатный клей (жидкое стекло) - Na₂SiO₃.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 24,
            type: "hard",
            text: "Какое соединение кремния образует при реакции с водой?",
            options: ["1) SiO₂", "2) SiH₄", "3) Si", "4) SiS₂"],
            correct: 1,
            explanation: "Кремний с водой образует силан SiH₄.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 25,
            type: "hard",
            text: "В каком случае соединения кремния проявляют амфотерные свойства?",
            options: ["1) В виде триоксида кремния", "2) В виде карбонил силикатов", "3) В виде силикатных расплавов", "4) В виде гидролизных продуктов"],
            correct: 2,
            explanation: "В силикатных расплавах соединения кремния проявляют амфотерные свойства.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 26,
            type: "hard",
            text: "Какое основное применение соединений кремния в медицине?",
            options: ["1) В качестве антисептиков", "2) В виде силикатных имплантатов", "3) В производстве антибиотиков", "4) В качестве дезинфицирующих средств"],
            correct: 1,
            explanation: "Силикатные материалы используются для медицинских имплантатов.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 27,
            type: "hard",
            text: "Какое соединение кремния используется в производстве солнечных элементов?",
            options: ["1) диоксид кремния", "2) металлический кремний", "3) сульфид кремния", "4) органические соединения кремния"],
            correct: 1,
            explanation: "Металлический кремний высокой чистоты используется в солнечных элементах.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 28,
            type: "hard",
            text: "Что из перечисленного является основным механизмом образования силикатных соединений?",
            options: ["1) Ковалентное связывание кремния с кислородом", "2) Ионное взаимодействие с металлами", "3) Выплавка при высоких температурах", "4) Реакция с водородом"],
            correct: 0,
            explanation: "Основной механизм - ковалентное связывание Si-O.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 29,
            type: "hard",
            text: "Какое из следующих утверждений верно относительно кремния и его соединений?",
            options: ["1) Кремний в основном используется в виде металлического порошка", "2) Кремний и его соединения не проводят электрический ток", "3) Органические соединения кремния активно применяются в фотонике и электронике", "4) Гидриды кремния не используют в промышленности"],
            correct: 2,
            explanation: "Органические соединения кремния применяются в фотонике и электронике.",
            points: 3,
            difficulty: "hard"
        },
        {
            id: 30,
            type: "hard",
            text: "Какой процесс используется для получения чистого кремния для полупроводников?",
            options: ["1) Электролиз", "2) Дистилляция", "3) Зонная плавка", "4) Экстракция"],
            correct: 2,
            explanation: "Для получения сверхчистого кремния используется метод зонной плавки.",
            points: 3,
            difficulty: "hard"
        }
    ]
};

console.log(`✅ Загружено ${QUIZ_DATA.questions.length} вопросов по химии (Кремний)`);

// 🛠️ СИСТЕМА МОДЕРАТОРОВ
window.moderatorSystem = {
    MODERATOR_PASSWORD: "Chemistry2024",
    
    isModerator() {
        return localStorage.getItem('isModerator') === 'true';
    },
    
    setModerator(status) {
        localStorage.setItem('isModerator', status);
        console.log(`🔧 Статус модератора: ${status ? 'ВКЛ' : 'ВЫКЛ'}`);
    },
    
    showPasswordModal() {
        const modalHTML = `
            <div id="moderatorModal" style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.7);
                backdrop-filter: blur(10px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                padding: 20px;
            ">
                <div style="
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 30px;
                    border-radius: 24px;
                    max-width: 400px;
                    width: 100%;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                ">
                    <h3 style="color: #fff; text-align: center; margin-bottom: 20px; text-shadow: 0 2px 10px rgba(255,255,255,0.3);">
                        🔧 Режим модератора
                    </h3>
                    <p style="color: rgba(255,255,255,0.8); text-align: center; margin-bottom: 20px;">
                        Введите пароль для доступа к функциям модератора
                    </p>
                    <input type="password" 
                           id="moderatorPassword" 
                           placeholder="Пароль"
                           style="
                                width: 100%;
                                padding: 15px;
                                background: rgba(255,255,255,0.1);
                                border: 1px solid rgba(255,255,255,0.3);
                                border-radius: 12px;
                                color: white;
                                font-size: 16px;
                                margin-bottom: 15px;
                                backdrop-filter: blur(10px);
                           ">
                    <div style="display: flex; gap: 10px;">
                        <button onclick="moderatorSystem.checkPassword()" 
                                style="
                                    flex: 1;
                                    padding: 15px;
                                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                    color: white;
                                    border: none;
                                    border-radius: 12px;
                                    font-weight: bold;
                                    cursor: pointer;
                                    backdrop-filter: blur(10px);
                                ">
                            Войти
                        </button>
                        <button onclick="moderatorSystem.hideModal()"
                                style="
                                    padding: 15px 25px;
                                    background: rgba(255, 65, 108, 0.2);
                                    color: white;
                                    border: 1px solid rgba(255, 65, 108, 0.5);
                                    border-radius: 12px;
                                    font-weight: bold;
                                    cursor: pointer;
                                    backdrop-filter: blur(10px);
                                ">
                            Отмена
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        setTimeout(() => {
            const input = document.getElementById('moderatorPassword');
            if (input) input.focus();
        }, 100);
    },
    
    checkPassword() {
        const input = document.getElementById('moderatorPassword');
        if (!input) return;
        
        if (input.value === this.MODERATOR_PASSWORD) {
            this.setModerator(true);
            this.hideModal();
            this.showModeratorControls();
            showNotification('✅ Вы вошли как модератор!');
        } else {
            showNotification('❌ Неверный пароль!');
            input.value = '';
            input.focus();
        }
    },
    
    hideModal() {
        const modal = document.getElementById('moderatorModal');
        if (modal) modal.remove();
    },
    
    showModeratorControls() {
        const style = document.createElement('style');
        style.textContent = `
            .moderator-badge {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(255, 158, 0, 0.2);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 158, 0, 0.5);
                color: white;
                padding: 12px 20px;
                border-radius: 20px;
                font-weight: bold;
                z-index: 9999;
                box-shadow: 0 8px 32px rgba(255, 106, 0, 0.2);
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .moderator-badge:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 40px rgba(255, 106, 0, 0.3);
            }
            
            .moderator-panel {
                position: fixed;
                bottom: 80px;
                right: 20px;
                background: rgba(26, 26, 46, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 158, 0, 0.3);
                border-radius: 16px;
                padding: 20px;
                z-index: 9998;
                min-width: 250px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                display: none;
            }
            
            .moderator-panel.active {
                display: block;
                animation: slideUp 0.3s ease;
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .moderator-btn {
                width: 100%;
                padding: 12px;
                margin: 8px 0;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: white;
                border-radius: 10px;
                cursor: pointer;
                text-align: left;
                display: flex;
                align-items: center;
                gap: 10px;
                transition: all 0.3s ease;
            }
            
            .moderator-btn:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateX(5px);
            }
        `;
        document.head.appendChild(style);
        
        if (!document.getElementById('moderatorBadge')) {
            const badge = document.createElement('div');
            badge.id = 'moderatorBadge';
            badge.className = 'moderator-badge';
            badge.innerHTML = '🔧 Модератор';
            badge.onclick = () => {
                const panel = document.getElementById('moderatorPanel');
                if (panel) panel.classList.toggle('active');
            };
            document.body.appendChild(badge);
            
            const panel = document.createElement('div');
            panel.id = 'moderatorPanel';
            panel.className = 'moderator-panel';
            panel.innerHTML = `
                <h4 style="color: #ff9e00; margin-top: 0; margin-bottom: 15px; text-align: center;">Управление игрой</h4>
                <button class="moderator-btn" onclick="moderatorSystem.kickLastPlayer()">
                    <span style="color: #ff416c;">👢</span> Удалить игрока
                </button>
                <button class="moderator-btn" onclick="moderatorSystem.listPlayers()">
                    <span style="color: #4cc9f0;">👥</span> Список игроков
                </button>
                <button class="moderator-btn" onclick="moderatorSystem.resetAllScores()">
                    <span style="color: #00ff88;">🔄</span> Сбросить очки
                </button>
                <button class="moderator-btn" onclick="moderatorSystem.exitModerator()">
                    <span style="color: #8f8f8f;">🚪</span> Выйти
                </button>
            `;
            document.body.appendChild(panel);
        }
    },
    
    kickLastPlayer() {
        if (!window.currentGameId) {
            showNotification('Сначала создайте игру!');
            return;
        }
        
        db.ref(`games/${currentGameId}/players`).once('value').then(snapshot => {
            const players = snapshot.val();
            if (!players) {
                showNotification('Нет игроков в игре');
                return;
            }
            
            const playerNames = Object.keys(players);
            const lastPlayer = playerNames[playerNames.length - 1];
            
            if (confirm(`Удалить игрока "${lastPlayer}"?`)) {
                db.ref(`games/${currentGameId}/players/${lastPlayer}`).remove()
                    .then(() => showNotification(`Игрок ${lastPlayer} удален`));
            }
        });
    },
    
    listPlayers() {
        if (!window.currentGameId) {
            showNotification('Сначала создайте игру!');
            return;
        }
        
        db.ref(`games/${currentGameId}/players`).once('value').then(snapshot => {
            const players = snapshot.val();
            if (!players) {
                showNotification('Нет игроков');
                return;
            }
            
            const list = Object.keys(players).map(name => `• ${name}`).join('\n');
            showNotification(`Игроки (${Object.keys(players).length}):\n\n${list}`);
        });
    },
    
    resetAllScores() {
        if (!window.currentGameId) {
            showNotification('Сначала создайте игру!');
            return;
        }
        
        if (confirm("Сбросить все очки у всех игроков?")) {
            db.ref(`games/${currentGameId}/players`).once('value').then(snapshot => {
                const players = snapshot.val();
                if (!players) return;
                
                const updates = {};
                Object.keys(players).forEach(playerName => {
                    updates[`games/${currentGameId}/players/${playerName}/score`] = 0;
                });
                
                db.ref().update(updates).then(() => {
                    showNotification('Все очки сброшены!');
                });
            });
        }
    },
    
    exitModerator() {
        this.setModerator(false);
        const badge = document.getElementById('moderatorBadge');
        const panel = document.getElementById('moderatorPanel');
        if (badge) badge.remove();
        if (panel) panel.remove();
        showNotification('Режим модератора выключен');
    }
};

// Утилита для уведомлений
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        padding: 15px 25px;
        border-radius: 16px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        white-space: pre-line;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Стили для анимаций уведомлений
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

console.log("✅ Система модераторов загружена");
console.log("🔑 Пароль модератора: Chemistry2024");
console.log("✨ Glassmorphism design ready");
