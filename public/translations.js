// translations.js
const translations = {
    en: {
        app: {
            title: "SAO"
        },
        header: {
            liveModeOff: "Live mode off",
            notifications: "You have new messages",
            logout: "Logout",
        },
        overview: {
            title: "Overview",
            page: {
                title: "Overview | SAO"
            },
            summary: {
                heading: "Work Summary",
                hoursWorked: "You worked 160 hours this month.",
                caption: "Working hours by week"
            },
            stats: {
                heading: "Project Success Rate",
                rangeLabel: "Last 30 days",
                selectLabel: "Select period",
                range: {
                "7days": "Last 7 days",
                "30days": "Last 30 days",
                "90days": "Last 90 days"
                },
                caption: "Success rate for current month",
                table: {
                caption: "Projects summary",
                status: "Status",
                count: "Count",
                successful: "Successful",
                unsuccessful: "Unsuccessful"
                }
            },
            errors: {
                heading: "Project Issues",
                system: "System errors – 10",
                user: "User errors – 5",
                unfinished: "Unfinished parts – 3",
                undefined: "Undefined – 1"
            }
        },
        projects: {
            title: "Projects",
            page: {
                title: "Projects | SAO",
                heading: "Projects"
            },
            search: {
                placeholder: "Search projects",
                button: "Search",
                newProject: "New Project"
            },
            list: {
                heading: "Active Projects",
                alpha: {
                name: "Project Alpha",
                client: "Client A",
                status: "Active",
                time: "120h"
                },
                beta: {
                name: "Project Beta",
                client: "Client B",
                status: "Completed",
                time: "80h"
                },
                gamma: {
                name: "Project Gamma",
                client: "Client C",
                status: "Active",
                time: "150h"
                },
                delta: {
                name: "Project Delta",
                client: "Client D",
                status: "Archived",
                time: "60h"
                },
                epsilon: {
                name: "Project Epsilon",
                client: "Client E",
                status: "Active",
                time: "90h"
                }
            }
        },

        reports: {
            title: "Reports",
            page: {
                title: "Reports | SAO"
            },
            filters: {
                title: "Filters",
                from_label: "From:",
                from_placeholder: "dd/mm/yyyy",
                to_label: "To:",
                to_placeholder: "dd/mm/yyyy",
                select_users: "Select users",
                select_project: "Select project",
                generate_report: "Generate report"
            },
            time_distribution: {
                title: "Time Distribution by project"
            },
            detailed_report: {
                title: "Detailed report"
            },
            table: {
                project: "Project",
                task: "Task",
                user: "User",
                time: "Time"
            },
            projects: {
                project1: {
                name: "Website Redesign",
                task: "Design review",
                user: "Ivan Petrov",
                time: "3h 20m"
                },
                project2: {
                name: "Mobile App",
                task: "API Integration",
                user: "Olena Kovalenko",
                time: "4h 10m"
                },
                project3: {
                name: "Website Redesign",
                task: "Frontend fixes",
                user: "Maria Ivanova",
                time: "2h 45m"
                }
            }
        },
        settings: {
            page: { title: "Settings | SAO" },
            title: "Settings",

            form: {
                name: {
                label: "Name:",
                placeholder: "Enter name"
                },
                email: {
                label: "Email:",
                placeholder: "example@mail.com"
                },
                password: {
                label: "Password:",
                placeholder: "••••••••",
                change: "Change Password"
                }
            },

            profile: {
                photo: {
                title: "Profile Photo",
                upload: "Upload New Photo"
                }
            },

            notifications: {
                title: "Notifications",
                email: "Email Reminders",
                reports: "Reports"
            },

            billing: {
                title: "Billing",
                subscription: "Subscription: Premium Plan",
                upgrade: "Upgrade Plan",
                payment_options: "Payment Options: Visa **** 1488"
            },

            actions: {
                save: "Save Changes"
            }
        }
    },
    uk: {
        app: {
            title: "SAO"
        },
        header: {
            liveModeOff: "Живий режим вимкнено",
            notifications: "У вас нові повідомлення",
            logout: "Вийти",
        },
       overview: {
            title: "Огляд",
            page: {
                title: "Огляд | SAO"
            },
            summary: {
                heading: "Підсумок роботи",
                hoursWorked: "Ви відпрацювали 160 годин цього місяця.",
                caption: "Робочі години за тижнями"
            },
            stats: {
                heading: "Рівень успішності проєктів",
                rangeLabel: "Останні 30 днів",
                selectLabel: "Виберіть період",
                range: {
                "7days": "Останні 7 днів",
                "30days": "Останні 30 днів",
                "90days": "Останні 90 днів"
                },
                caption: "Рівень успіху за поточний місяць",
                table: {
                caption: "Підсумки проєктів",
                status: "Статус",
                count: "Кількість",
                successful: "Успішні",
                unsuccessful: "Неуспішні"
                }
            },
            errors: {
                heading: "Проблеми проєктів",
                system: "Системні помилки – 10",
                user: "Помилки користувачів – 5",
                unfinished: "Незавершені частини – 3",
                undefined: "Невизначено – 1"
            }
        },
        projects: {
            title: "Проєкти",
            page: {
                title: "Проєкти | SAO",
                heading: "Проєкти"
            },
            search: {
                placeholder: "Пошук проєктів",
                button: "Пошук",
                newProject: "Новий проєкт"
            },
            list: {
                heading: "Активні проєкти",
                alpha: {
                name: "Проєкт Альфа",
                client: "Клієнт A",
                status: "Активний",
                time: "120 год"
                },
                beta: {
                name: "Проєкт Бета",
                client: "Клієнт B",
                status: "Завершений",
                time: "80 год"
                },
                gamma: {
                name: "Проєкт Гамма",
                client: "Клієнт C",
                status: "Активний",
                time: "150 год"
                },
                delta: {
                name: "Проєкт Дельта",
                client: "Клієнт D",
                status: "Архівований",
                time: "60 год"
                },
                epsilon: {
                name: "Проєкт Епсилон",
                client: "Клієнт E",
                status: "Активний",
                time: "90 год"
                }
            }
        },

        reports: {
            title: "Звіти",
            page: {
                title: "Звіти | SAO"
            },
            filters: {
                title: "Фільтри",
                from_label: "Від:",
                from_placeholder: "дд/мм/рррр",
                to_label: "До:",
                to_placeholder: "дд/мм/рррр",
                select_users: "Обрати користувачів",
                select_project: "Обрати проєкт",
                generate_report: "Згенерувати звіт"
            },
            time_distribution: {
                title: "Розподіл часу за проєктами"
            },
            detailed_report: {
                title: "Детальний звіт"
            },
            table: {
                project: "Проєкт",
                task: "Завдання",
                user: "Користувач",
                time: "Час"
            },
            projects: {
                project1: {
                name: "Редизайн сайту",
                task: "Огляд дизайну",
                user: "Іван Петров",
                time: "3 год 20 хв"
                },
                project2: {
                name: "Мобільний додаток",
                task: "Інтеграція API",
                user: "Олена Коваленко",
                time: "4 год 10 хв"
                },
                project3: {
                name: "Редизайн сайту",
                task: "Фронтенд виправлення",
                user: "Марія Іванова",
                time: "2 год 45 хв"
                }
            }
        },
        settings: {
            page: { title: "Налаштування | SAO" },
            title: "Налаштування",

            form: {
                name: {
                label: "Ім’я:",
                placeholder: "Введіть ім’я"
                },
                email: {
                label: "Пошта:",
                placeholder: "example@mail.com"
                },
                password: {
                label: "Пароль:",
                placeholder: "••••••••",
                change: "Змінити пароль"
                }
            },

            profile: {
                photo: {
                title: "Фото профілю",
                upload: "Завантажити нове фото"
                }
            },

            notifications: {
                title: "Повідомлення",
                email: "Нагадування на пошту",
                reports: "Звіти"
            },

            billing: {
                title: "Підписка",
                subscription: "Підписка: Premium Plan",
                upgrade: "Покращити План",
                payment_options: "Спосіб оплати: Visa **** 1488"
            },

            actions: {
                save: "Зберегти зміни"
            }
        }
    }
};

// Поточна мова
let currentLang = 'en';

// Функція зміни мови
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => {
            value = value?.[k];
        });
        if (value) {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        keys.forEach(k => {
            value = value?.[k];
        });
        if (value) {
            el.setAttribute('placeholder', value);
        }
    });

    document.title = translations[lang]?.overview?.title || translations[lang]?.projects?.title || translations[lang]?.reports?.title || translations[lang]?.settings?.title;
}