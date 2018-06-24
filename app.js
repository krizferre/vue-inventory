new Vue({
  el: '#inventory-app',

  data: {
    items: items,
    categories: categories,

    newCategoryName: '',

    newDesc: '',
    newVariant: '',
    newCategory: '',
    newSize: '',
    newUnitPrice: 0,
    newQuantity: 0,

    srchDesc: '',
    srchVariant: '',
    srchCategory: '',
    srchSize: '',
    srchQuantity: null,
    srchQuantitySelect: 'less'
  },

  methods: {
    // item functions
    clearAddItemForm: function() {
      this.newDesc = '';
      this.newVariant = '';
      this.newCategory = '';
      this.newSize = '';
      this.newUnitPrice = 0;
      this.newQuantity = 0; 
    },

    addNewItem: function() {
      this.items.push({
        desc: this.newDesc,
        variant: this.newVariant,
        category: this.newCategory,
        size: this.newSize,
        unitPrice: this.newUnitPrice,
        quantity: this.newQuantity,     
        editDesc: '',
        editVariant: '',
        editCategory: '',
        editSize: '',
        editUnitPrice: 0,
        editQuantity: 0,
        isEditing: false
      });
      this.newDesc = '';
      this.newVariant = '';
      this.newCategory = '';
      this.newSize = '';
      this.newUnitPrice = 0;
      this.newQuantity = 0; 
    },

    editItem: function(item) {
      item.isEditing = true;

      item.editDesc = item.desc;
      item.editVariant = item.variant;
      item.editCategory = item.category;
      item.editSize = item.size;
      item.editUnitPrice = item.unitPrice;
      item.editQuantity = item.quantity;
    },

    saveItem: function(item) {
      item.isEditing = false;

      item.desc = item.editDesc;
      item.variant = item.editVariant;
      item.category = item.editCategory;
      item.size = item.editSize;
      item.unitPrice = item.editUnitPrice;
      item.quantity = item.editQuantity;

      item.editDesc = '';
      item.editVariant = '';
      item.editCategory = '';
      item.editSize = '';
      item.editUnitPrice = '';
      item.editQuantity = '';
    },

    cancelItem: function(item) {
      item.isEditing = false;
      item.editDesc = '';
      item.editVariant = '';
      item.editCategory = '';
      item.editSize = '';
      item.editUnitPrice = '';
      item.editQuantity = '';    
    },

    showItem: function(item) {
      let descMatch = false;
      let variantMatch = false;
      let categoryMatch = false;
      let sizeMatch = false;
      let quantityMatch = false;

      if (!this.srchDesc || item.desc.toLowerCase().indexOf(this.srchDesc.toLowerCase()) >= 0) {
        descMatch = true;
      }
      if (!this.srchVariant || item.variant.toLowerCase().indexOf(this.srchVariant.toLowerCase()) >= 0) {
        variantMatch = true;
      }      
      if (!this.srchCategory || item.category.toLowerCase().indexOf(this.srchCategory.toLowerCase()) >= 0) {
        categoryMatch = true;
      }      
      if (!this.srchSize || item.size.toLowerCase().indexOf(this.srchSize.toLowerCase()) >= 0) {
        sizeMatch = true;
      }
      if (this.srchQuantitySelect === 'less') {
        if (!this.srchQuantity || item.quantity <= this.srchQuantity) {
          quantityMatch = true;
        }
      } else {
        if (!this.srchQuantity || item.quantity >= this.srchQuantity) {
          quantityMatch = true;
        }
      }

      return descMatch && variantMatch && categoryMatch && sizeMatch && quantityMatch;
    },
    // end of item functions

    // category functions
    clearAddCategoryForm: function() {
      this.newCategoryName = '';
    },

    addNewCategory: function() {
      this.categories.push({
        name: this.newCategoryName, 
        editName: '',
        isEditing: false
      });
      this.newCategoryName = '';
    },

    editCategory: function(category) {
      category.isEditing = true;
      category.editName = category.name;
    },

    saveCategory: function(category) {
      category.isEditing = false;
      category.name = category.editName;
      category.editName = '';
    },

    cancelCategory: function(category) {
      category.isEditing = false;
      category.editName = '';
    },
    // end of category functions
  }
});

// √ List items
// √ Add new item
// √ Edit item
// √ Delete item
// √ Search item/s

// √ LIst categories
// √ Add new category
// √ Edit category