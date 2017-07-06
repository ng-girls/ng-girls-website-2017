// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    url: {
        partners: 'data/partners.json'
    },
    c4sponsorsUrl: 'mailto:info@ng-girls.org',
    partners: {
        title: 'Partners',
        c4sponsorsButton: 'Become a sponsor'
    }
};
