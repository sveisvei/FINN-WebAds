buster.testCase("My thing", {
    "has the foo and bar": function () {
       FINN.webAds.queue({
         name: 'Top',
         url: 'Cases/Test12/index.js'
       });       
       
       FINN.webAds.render();
       
       assert(true)
    },

    "states the obvious": function () {
        assert(true);
    }
})