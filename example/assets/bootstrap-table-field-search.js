(function($) {

    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        searchFields: null
    });
    
    var BootstrapTable = $.fn.bootstrapTable.Constructor;
    
    var search = function() {
        if (this.options.searchFields == null) {
            this.defaultSearch();
            return;
        }
        
        this.data = [];
        var text = this.searchText;
        if (!text) {
            return;
        }
        
        var foundItems = [];
        var searchData = this.options.data;
        this.data = [];
        
        var searchField = null;
        var searchParams = text.split(':');
        
        if (searchParams.length > 1 && this.options.searchFields) {
            text = text.substring(searchParams[0].length + 1, text.length);
            
            if (this.options.trimOnSearch) {
                text = text.trim();
            }
            
            var searchKeys = Object.keys(this.options.searchFields).map(function(key) {
                return key.toLowerCase();
            });
            
            if (searchKeys.indexOf(searchParams[0].toLowerCase()) != -1) {
                searchField = this.options.searchFields[searchParams[0]];
            }
        }
        
        var columns = this.getVisibleColumns();
        if (searchField != null) {
            for (var i = 0; i < searchData.length; i++) {
                if (searchData[i][searchField] != null) {
                    if (this.options.strictSearch && text.toLowerCase() == searchData[i][searchField].toLowerCase()) {
                        this.data.push(searchData[i]);
                    } else if (!this.options.strictSearch && searchData[i][searchField].toLowerCase().indexOf(text.toLowerCase()) != -1) {
                        this.data.push(searchData[i]);
                    }
                }
            }
        } else {
            this.defaultSearch();
        }
    }
    
    BootstrapTable.prototype.defaultSearch = BootstrapTable.prototype.initSearch;
    BootstrapTable.prototype.initSearch = search;
    
})(jQuery);