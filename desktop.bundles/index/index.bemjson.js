({
    block: 'page',
    title: 'Портфолио Андрюшкова Константина',
    scripts: [
        { elem: 'js', url: 'index.min.js' }
    ],
    head : [
        { elem : 'meta', attrs : { name : 'description', content : 'Портфлио' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url:'../../desktop.blocks/reset-css/reset.css' },
        { elem : 'css', url : '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' },
        { elem: 'conditional-comment', condition : 'HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries' },
        {
            elem : 'conditional-comment',
            condition : 'lt IE 9',
            content : [
                { elem : 'js', url : 'https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js' },
                { elem : 'js', url : 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js' }
            ]
        },
        { elem : 'js', url: 'http://yastatic.net/jquery/2.1.4/jquery.min.js' },
        { elem : 'js', url: 'https://maps.googleapis.com/maps/api/js?sensor=false' },
        { elem : 'js', url: 'production.js' }
    ],
    styles: [
        { elem: 'css', url: 'index.min.css' }
    ],
    content: {
        elem: 'inner',
        content: [
            {
                block: 'content',
                content: [
                    {
                        block: 'part',
                        attrs: { id: "about" },
                        content: [
                            {
                                block: 'header',
                                content: [
                                    {
                                        elem: "inner",
                                        content: [
                                            {
                                                elem: 'side',
                                                mods: { align: 'left' },
                                                content: [
                                                    {
                                                        block: 'author',
                                                        mix: { block: 'header', elem: 'author'},
                                                        content: ['Константин Андрюшков']
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'side',
                                                mods: { align: 'right' },
                                                content: [
                                                    {
                                                        elem: 'menu-icon',
                                                        content: [
                                                            {
                                                                block : 'fa',
                                                                icon : 'navicon',
                                                                width : 'fixed'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'top',
                                content: [
                                    {
                                        elem: 'cover',
                                        content: [
                                            {
                                                block: 'image',
                                                mix: { block: 'top', elem: 'picture' },
                                                url: '../../images/workspace.png'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'title',
                                mix : { block: 'part', elem: 'welcome'},
                                mods: { level: 2 },
                                content : 'Добро пожаловать!'
                            },
                            {
                                elem: 'container',
                                content: [
                                    {
                                        block: 'title',
                                        mods : { level: 3 },
                                        content: 'Пару слов о себе',
                                    },
                                    {
                                        elem: 'description',
                                        content: 'Меня зовут Константин, я изучаю и практикую Web разработку сайтов с нуля уже около 2 лет.' +
                                        ' За это время я немало чему научился, но чем дальше в лес, тем больше дров,' +
                                        ' и сейчас хотел бы устроиться на работу с целью получить больше практических знаний' +
                                        ' от более опытных коллег. Мне нравится Web программирование и я занимаюсь' +
                                        ' этим с удовольствием. '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'part',
                        attrs: { id: "ed" },
                        content: [
                            {
                                elem: 'container',
                                content: [
                                    {
                                        block: 'title',
                                        mods : { level: 3 },
                                        content: 'Образование',
                                    },
                                    {
                                        elem: 'description',
                                        content:
                                        ' В 2014 году окончил магистратуру Харьковского Национального Университета им. Каразина ' +
                                        ' кафедры материалов реакторостроения и физических технологий с направлением прикладная физика'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'part',
                        attrs: { id: "skill" },
                        content: [
                            {
                                elem: 'container',
                                content: [
                                    {
                                        block: 'title',
                                        mods : { level: 3 },
                                        content: 'С чем знаком',
                                    },
                                    {
                                        elem: 'skills',
                                        content:[
                                            {
                                                block : 'skill',
                                                content : [
                                                    {
                                                        elem: 'left-block',
                                                        content : [
                                                            {
                                                                elem: 'block-title',
                                                                content: 'Front-end'
                                                            },
                                                            {
                                                                elem: 'left-block-list',
                                                                content: [
                                                                    { 'icon' : 'check-square', 'text' : 'HTML, CSS' },
                                                                    { 'icon' : 'check-square', 'text' : 'SCSS, Compass' },
                                                                    { 'icon' : 'check-square', 'text' : 'BEM' },
                                                                    { 'icon' : 'check-square', 'text' : 'Адаптивная верстка' },
                                                                    { 'icon' : 'check-square', 'text' : 'JQuery' },
                                                                    { 'icon' : 'check-square', 'text' : 'Grunt' }
                                                                ].map(function(b){
                                                                        return {
                                                                            elem : 'item',
                                                                            content : [
                                                                                {
                                                                                    block : 'fa',
                                                                                    mix: { block: 'skill', elem: 'icon'},
                                                                                    icon : b.icon,
                                                                                    size: '2x'
                                                                                },
                                                                                {
                                                                                    elem: 'text',
                                                                                    content: b.text
                                                                                }
                                                                            ]
                                                                        }
                                                                    })
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'right-block',
                                                        content : [
                                                            {
                                                                elem: 'block-title',
                                                                content: 'Back-end'
                                                            },
                                                            {
                                                                elem: 'right-block-list',
                                                                content : [
                                                                    { 'icon' : 'check-square', 'text' : 'PHP, MVC, OOP' },
                                                                    { 'icon' : 'check-square', 'text' : 'Yii Framework 1.0' },
                                                                    { 'icon' : 'check-square', 'text' : 'CMS: WordPress' },
                                                                    { 'icon' : 'check-square', 'text' : 'MySQL' }
                                                                ].map(function(b){
                                                                        return {
                                                                            elem : 'item',
                                                                            content : [
                                                                                {
                                                                                    block : 'fa',
                                                                                    mix: { block: 'skill', elem: 'icon'},
                                                                                    icon : b.icon,
                                                                                    size: '2x'
                                                                                },
                                                                                {
                                                                                    elem: 'text',
                                                                                    content: b.text
                                                                                }
                                                                            ]
                                                                        }
                                                                    })
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'title',
                                                        mix: { block:'part', elem:'want-to-know' },
                                                        mods : { level: 3 },
                                                        content: 'Хотел бы изучить'
                                                    },
                                                    {
                                                        elem: 'left-block',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: [
                                                                    {
                                                                        block : 'fa',
                                                                        mix: { block: 'skill', elem: 'icon', mods: {color : 'yellow'} },
                                                                        mods : { color : 'yellow' },
                                                                        icon : 'plus',
                                                                        size: '2x'
                                                                    },
                                                                    {
                                                                        elem: 'text',
                                                                        content: 'JavaScript'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem: 'item',
                                                                content: [
                                                                    {
                                                                        block : 'fa',
                                                                        mix: { block: 'skill', elem: 'icon', mods: {color : 'yellow'} },
                                                                        mods : { color : 'yellow' },
                                                                        icon : 'plus',
                                                                        size: '2x'
                                                                    },
                                                                    {
                                                                        elem: 'text',
                                                                        content: 'ReactJs'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'right-block',
                                                        content: [
                                                            {
                                                                elem: 'item',
                                                                content: [
                                                                    {
                                                                        block : 'fa',
                                                                        mix: { block: 'skill', elem: 'icon', mods: {color : 'yellow'} },
                                                                        mods : { color : 'yellow' },
                                                                        icon : 'plus',
                                                                        size: '2x'
                                                                    },
                                                                    {
                                                                        elem: 'text',
                                                                        content: 'Node, Express'
                                                                    }

                                                                ]
                                                            },
                                                            {
                                                                elem: 'item',
                                                                content: [
                                                                    {
                                                                        block : 'fa',
                                                                        mix: { block: 'skill', elem: 'icon', mods: {color : 'yellow'} },
                                                                        mods : { color : 'yellow' },
                                                                        icon : 'plus',
                                                                        size: '2x'
                                                                    },
                                                                    {
                                                                        elem: 'text',
                                                                        content: 'Redis + Memcache'
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                elem: 'item',
                                                                content: [
                                                                    {
                                                                        block : 'fa',
                                                                        mix: { block: 'skill', elem: 'icon', mods: {color : 'yellow'} },
                                                                        mods : { color : 'yellow' },
                                                                        icon : 'plus',
                                                                        size: '2x'
                                                                    },
                                                                    {
                                                                        elem: 'text',
                                                                        content: 'NoSQL, API'
                                                                    },
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'part',
                        attrs: { id: "work" },
                        content: [
                            {
                                elem: 'container',
                                content: [
                                    {
                                        block: 'title',
                                        mods : { level: 3 },
                                        content: 'Моя практика'
                                    },
                                    {
                                        elem: 'description',
                                        content:
                                        ' Здесь представлены некоторые из моих работ, выполненные входе изучения веб-технологий '
                                    },
                                    {
                                        block: 'job',
                                        content:[
                                            {
                                                block: 'link',
                                                mix: { block : 'job', elem: 'pict-link' },
                                                url: '#',
                                                content: [
                                                    {
                                                        block: 'image',
                                                        mix: { block: 'job', elem: 'picture'},
                                                        url: '../../images/chit1.png'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                block: 'title',
                                                                mods : { level: 4 },
                                                                content: 'Читайм 1.0'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                elem: 'desc',
                                                                mix: { block: 'job', elem: 'description'},
                                                                tag: 'p',
                                                                content: 'CMS написанная c использованием Yii, JQuery, SСSS' +
                                                                ' с получением данных о просмотрах статей из Яндекс.Метрики'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'state',
                                                        content:[
                                                            {
                                                                block : 'fa',
                                                                mix: {block: 'state', elem: 'icon', mods:{ color: 'yellow' } },
                                                                icon : 'refresh',
                                                                animate : 'spin',
                                                                width : 'fixed'
                                                            },
                                                            {
                                                                elem: 'name',
                                                                content: 'не завершен'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'job',
                                        content:[
                                            {
                                                block: 'link',
                                                mix: { block : 'job', elem: 'pict-link' },
                                                url: '#',
                                                content: [
                                                    {
                                                        block: 'image',
                                                        mix: { block: 'job', elem: 'picture'},
                                                        url: '../../images/chit2.png'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                block: 'title',
                                                                mods : { level: 4 },
                                                                content: 'Читайм 2.0'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                elem: 'desc',
                                                                mix: { block: 'job', elem: 'description'},
                                                                tag: 'p',
                                                                content: 'Распределение статей в зависимости от оценки, возможность ' +
                                                                'выбора различных интерфейсов и стилей. ' +
                                                                'Собрано используя Grunt'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'state',
                                                        content:[
                                                            {
                                                                block : 'fa',
                                                                mix: {block: 'state', elem: 'icon', mods:{ color: 'yellow' } },
                                                                icon : 'refresh',
                                                                animate : 'spin',
                                                                width : 'fixed'
                                                            },
                                                            {
                                                                elem: 'name',
                                                                content: 'не завершен'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'job',
                                        content:[
                                            {
                                                block: 'link',
                                                mix: { block : 'job', elem: 'pict-link' },
                                                url: '#',
                                                content: [
                                                    {
                                                        block: 'image',
                                                        mix: { block: 'job', elem: 'picture'},
                                                        url: '../../images/shop2.png'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                block: 'title',
                                                                mods : { level: 4 },
                                                                content: 'Магазин Staff'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                elem: 'desc',
                                                                mix: { block: 'job', elem: 'description'},
                                                                tag: 'p',
                                                                content: 'Использован плагин WordPress - WooCommerce и бесплатный шаблон Mystile'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'state',
                                                        content:[
                                                            {
                                                                block : 'fa',
                                                                mix: {block: 'state', elem: 'icon', mods:{ color: 'green' } },
                                                                icon : 'angellist',
                                                                width : 'fixed'
                                                            },
                                                            {
                                                                elem: 'name',
                                                                content: 'завершен'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'job',
                                        content:[
                                            {
                                                block: 'link',
                                                mix: { block : 'job', elem: 'pict-link' },
                                                url: '#',
                                                content: [
                                                    {
                                                        block: 'image',
                                                        mix: { block: 'job', elem: 'picture'},
                                                        url: '../../images/portfolio.jpg'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                block: 'title',
                                                                mods : { level: 4 },
                                                                content: 'Портфолио'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                elem: 'desc',
                                                                mix: { block: 'job', elem: 'description'},
                                                                tag: 'p',
                                                                content: 'Применен полный стек БЭМ-технологий и адаптивная верстка'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'state',
                                                        content:[
                                                            {
                                                                block : 'fa',
                                                                mix: {block: 'state', elem: 'icon', mods:{ color: 'green' } },
                                                                icon : 'angellist',
                                                                width : 'fixed'
                                                            },
                                                            {
                                                                elem: 'name',
                                                                content: 'завершен'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'job',
                                        content:[
                                            {
                                                block: 'link',
                                                mix: { block : 'job', elem: 'pict-link' },
                                                url: '#',
                                                content: [
                                                    {
                                                        block: 'image',
                                                        mix: { block: 'job', elem: 'picture'},
                                                        url: '../../images/interview.png'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'inner',
                                                content: [
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                block: 'title',
                                                                mods : { level: 4 },
                                                                content: 'Интервью'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'link',
                                                        url: '#',
                                                        content: [
                                                            {
                                                                elem: 'desc',
                                                                mix: { block: 'job', elem: 'description'},
                                                                tag: 'p',
                                                                content: 'Сайт для составления опросов и получения общей и связанной статистики ответов. ' +
                                                                'PHP, MVC, OOP, MySQL, JQuery'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'state',
                                                        content:[
                                                            {
                                                                block : 'fa',
                                                                mix: {block: 'state', elem: 'icon', mods:{ color: 'yellow' } },
                                                                icon : 'refresh',
                                                                animate : 'spin',
                                                                width : 'fixed'
                                                            },
                                                            {
                                                                elem: 'name',
                                                                content: 'не завершен'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'part',
                        attrs: { id: "cont" },
                        content: [
                            {
                                elem: 'container',
                                content: [
                                    {
                                        block: 'title',
                                        mods : { level: 3 },
                                        content: 'Обратная связь'
                                    },
                                    {
                                        elem: 'description',
                                        content: 'Напишите мне и я постараюсь ответить как можно быстрее'
                                    },
                                    {
                                        block: 'form',
                                        attrs: { method: 'POST', action: 'contact.php'},
                                        content: [
                                            {
                                                elem: 'row',
                                                content: [
                                                    {
                                                        elem: 'cover',
                                                        elemMods: { position: 'left'},
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                attrs: { placeholder: 'Имя', type: 'text', name: 'name'}
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'cover',
                                                        elemMods: { position: 'right'},
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                attrs: { placeholder: 'Телефон', type: 'text', name: 'tel'}
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'row',
                                                content: [
                                                    {
                                                        elem: 'cover',
                                                        content: [
                                                            {
                                                                elem: 'input',
                                                                attrs: { placeholder: 'Email', type: 'email', name: 'email'}
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'row',
                                                content: [
                                                    {
                                                        elem: 'cover',
                                                        content: [
                                                            {
                                                                elem: 'textarea',
                                                                attrs: { placeholder: 'Сообщение', name: 'message'}
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'row',
                                                content: [
                                                    {
                                                        elem: 'button',
                                                        elemMods: { type: 'submit' },
                                                        attrs: { type: 'submit', name: 'send', value: 'Отправить' }

                                                    },
                                                    {
                                                        elem: 'button',
                                                        elemMods: { type: 'reset' },
                                                        attrs: { type: 'reset', value: 'Очистить' }

                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        block: 'main-footer',
                        content: [
                            {
                                block: 'gmap',
                                attrs: { id: 'map' }
                            },
                            {
                                block: 'dotted'
                            }
                        ]
                    }
                ]
            },
            {
                block: 'sidebar',
                content: [
                    {
                        elem:'inner',
                        content:[
                            {
                                block: 'user',
                                content: [
                                    {
                                        block: 'image',
                                        mix: { block: 'user', elem: 'picture' },
                                        url: '../../images/avatar.png'
                                    },
                                    {
                                        block: 'title',
                                        mix: { block: 'user', elem: 'name' },
                                        mods: { level: 1 },
                                        content: 'Константин Андрюшков'
                                    },
                                    {
                                        elem: 'description',
                                        content: 'Занимаюсь Web-разработкой'
                                    }
                                ]
                            },
                            {
                                block: 'navigation',
                                mix: {block: 'sidebar', elem:'navigation'},
                                content: [
                                    {
                                        elem: 'item',
                                        elemMods: { active: 'on' },
                                        content: [
                                            {
                                                elem : 'link',
                                                attrs: {
                                                    href : '#about'
                                                },
                                                content : 'Обо мне'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem : 'link',
                                                attrs: {
                                                    href : '#ed'
                                                },
                                                content : 'Образование'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem : 'link',
                                                attrs: {
                                                    href : '#skill'
                                                },
                                                content : 'Навыки'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem : 'link',
                                                attrs: {
                                                    href : '#work'
                                                },
                                                content : 'Мои работы'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem : 'link',
                                                attrs: {
                                                    href : '#cont'
                                                },
                                                content : 'Контакты'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                block: 'footer',
                                content: [
                                    {
                                        block : 'social',
                                        content : [
                                            [
                                                { 'icon' : 'vk', href: '#' },
                                                { 'icon' : 'github', href: '#' }
                                            ].map(function(b){
                                                    return {
                                                        elem : 'item',
                                                        tag: 'a',
                                                        attrs: { href: b.href},
                                                        content : [
                                                            {
                                                                block : 'fa',
                                                                icon : b.icon
                                                            }
                                                        ]
                                                    }
                                                })
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
