{
    'name': 'Themes Power Module',
    'version': '16.0.0.1',
    'category': 'Theme/Themes Power Module',
    'website': 'https://www.odoo.com/',
    'description': """
       Making Snippet in web for Themes Power Snippet.
    """,
    'author':"Harshiv Johi - Warlock Technologies Pvt Ltd.",
    'depends':['website','web','base_setup'],    
    'data':[
        'views/snippet.xml',
        'views/snippets/video_snippet.xml',
        'views/snippets/flex_div.xml'
    ],
    'assets':{
        'web.assets_frontend': [
            '/theme_power_module/static/src/scss/style.scss',
            '/theme_power_module/static/src/js/mixin.js',          
        ],
        'website.assets_wysiwyg':[
            '/theme_power_module/static/src/js/snippet_options.js',
            '/theme_power_module/static/src/xml/popup_content.xml',
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': True,
    "license":"OPL-1",
    'external_dependencies':{

    }
}