using System.Collections.Generic;

namespace BashCorp.Models
{
    public sealed class SkillsList
    {
        private static SkillsList instance;
        private static object locker = new object();
        private readonly IDictionary<Tech, Skill> skills;

        private SkillsList()
        {
            skills = new Dictionary<Tech, Skill>() {
                { Tech.MongoDB, new Skill("MongoDB is a fast, document-oriented database", "mongodb.png", "http://www.mongodb.com")},
                { Tech.HTML5CSS3, new Skill("HTML5 and CSS3 are the current standards for web apps", "CSS3_and_HTML5_logos_and_wordmarks.svg.png")},
                { Tech.SASS, new Skill("SASS CSS pre-processor allows for programmatic styling", "Sass_Logo_Color.svg.png")},
                { Tech.Angular, new Skill("Angular JS is a client-side MVC framework from Google","AngularJS_logo.png", "https://angularjs.org/" )},
                { Tech.JQuery, new Skill("jQuery is a popular JavaScript utility library", "2000px-JQuery_logo_text.svg.png", "http://www.jquery.com")},
                { Tech.Node, new Skill("NodeJS: Server-side JavaScript", "Node.js_logo.svg.png", "http://www.nodejs.org")},
                { Tech.JavaScript, new Skill("Plain old JavaScript", "Unofficial_JavaScript_logo_2.svg.png")},
                { Tech.Gulp, new Skill("Gulp, a JavaScript build runner", "gulp.png", "http://www.gulpjs.com")},
                { Tech.AWS, new Skill("Web Services provided by Amazon to build high-availability SAAS solutions", "aws.png", "http://aws.amazon.com")},
                { Tech.DotNet, new Skill("Microsoft .Net Framework is the legendary Microsoft runtime", "800px-Microsoft_NET_logo_old.svg.png", "http://www.microsoft.com")},
                { Tech.Azure, new Skill("Microsoft Azure is a Platform-as-a-Service solution for high-availability online services", "azure.png", "http://www.azure.com")},
                { Tech.Bootstrap, new Skill("Bootstrap is the standard framework for building responsive HTML", "Boostrap_logo.png", "http://www.getbootstrap.com")},
                { Tech.Grunt, new Skill("Grunt, a JavaScript build runner", "grunt.png", "http://www.gruntjs.com")},
                { Tech.React, new Skill("React is a client-side single-page app framework from Facebook", "reactjs.png", "https://facebook.github.io/react/")},
                { Tech.Umbraco, new Skill("Umbraco: a popular open-source CMS", "umbraco.png", "http://www.umbraco.com")},
                { Tech.Sitecore, new Skill("Sitecore is the industry-leading CMS", "sitecore_logo.png", "http://www.sitecore.com")},
                { Tech.SQLServer, new Skill("Microsoft SQL Server is an industry-leading RDBMS system", "6116.SQLServerNoVersion_thumb_170B4444.png", "http://www.microsoft.com")},
                { Tech.Babel, new Skill("Babel allows cutting-edge ECMA2016 code to be transcompiled down into regular JavaScript for compatibility", "babel.png", "http://babeljs.io")},
                { Tech.Webpack, new Skill("Webpack is a modern minification and bundling runner", "webpack.png", "https://webpack.github.io/")},
                { Tech.Mocha, new Skill("Mocha allows easy unit testing of JavaScript code, with additional code coverage generated through NYC", "mocha.png", "http://mochajs.org")},
                { Tech.Require, new Skill("Require was one of the original ways to separate JavaScript into AMD modules and then resolve and minify them at runtime. Still going strong.", "require.png", "http://requirejs.org")},
                { Tech.Knockout, new Skill("A lovely little MVVP framework for client-side apps. Since superceded by Angular and now React. Still alive, though.", "knockoutjs.png", "http://www.knockoutjs.com")}
            };
        }

        public static SkillsList Instance
        {
            get
            {
                if (instance == null)
                    lock (locker)
                        instance = new SkillsList();

                return instance;
            }
        }

        public IDictionary<Tech, Skill> Skills
        {
            get
            {
                return skills;
            }
        }
    }
}