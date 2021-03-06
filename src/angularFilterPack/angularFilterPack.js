// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angularFilterPack.config', []);

// Modules
angular.module('angularFilterPack.services', []);
angular.module('angularFilterPack.filters', ['angularFilterPack.services']);
angular.module('angularFilterPack',
    [
        'angularFilterPack.config',
        'angularFilterPack.services',
        'angularFilterPack.filters'
    ]);
