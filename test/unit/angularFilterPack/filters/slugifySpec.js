describe('Slugify filter', function(){

    var filter;

    beforeEach(module('angularFilterPack.filters'));

    beforeEach(inject(function($filter){
        filter = $filter('slugify');
    }));

    it('should exist', function(){
        expect(filter).toBeDefined();
    });

    it('should convert spaces correctly', function(){
        expect(filter('hello world')).toBe('hello-world');
    });

    it('should convert to lowercase correctly', function(){
        expect(filter('helloWorld')).toBe('helloworld');
        expect(filter('HelloWorld')).toBe('helloworld');
    });

});