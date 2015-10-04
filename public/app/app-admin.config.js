(function() {
    'use strict';

    angular
        .module('app.admin')
        .config(appAdminConfig);

    appAdminConfig.$inject = [
        'NgAdminConfigurationProvider',
        'RestangularProvider'
        // 'blogConfigurerProvider'
    ];

    function appAdminConfig(
        NgAdminConfigurationProvider,
        RestangularProvider,
        blogConfigurerProvider) {

        var ngAdmin = NgAdminConfigurationProvider;

        var admin = ngAdmin
                        .application('ECharm Admin')
                        .baseApiUrl('http://localhost:8080/');



        /*
        Entity
        */

        var article = ngAdmin.entity('articles');

        admin.addEntity(article);


        article
            .listView()
            // .title('All articles')
            // .infinitePagination(true)
            .fields([
                ngAdmin.field('article_id'),
                ngAdmin.field('author_id'),
                ngAdmin.field('content_text')
            ])

        ngAdmin.configure(admin);

    }

})();
