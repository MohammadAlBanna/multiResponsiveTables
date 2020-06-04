# MultiResponsiveTables
Your website is fully responsive? What about tables? This jQuery function is for you IF you don't use any CSS frameworks (e.g: Bootstrap)!

# Normal Tables
![](https://i.imgur.com/UP1oQ2u.png)

# Using the function
![](https://i.imgur.com/TUavnEa.png)

# How to use (JavaScript)
- Call jQuery library.
- Call jquery.multiResponsiveTables.js function (jQuery function).
- Call tables you want to be responsive.

**Call needed JavaScript scripts**
```
  <script src="js/vendor/jquery.js"></script>
  <script src="js/jquery.multiResponsiveTables.js"></script>
```

**Make tables responsive:**
```
  <script>
    // Calling multiResponsiveTables library for all tables elements in this page
    $(function(){
      $(".responsive-table").multiResponsiveTables();
    });
  </script>
```

**CSS media query**
```
/* This part is very important for responsive screens less than 600px in width */
@media screen and (max-width: 600px) {
  table.responsive-table thead {
    display: none;
  }

  table.responsive-table tbody td {
    display: block;
    padding: .6rem;
  }

  table.responsive-table tbody tr td:first-child {
    background: #666;
    color: #fff;
  }

  table.responsive-table tbody td:before {
    content: attr(data-th);
    font-weight: bold;
    display: inline-block;
    padding-right: 10px;
  }
}
```

# URLs
- [10+ Solutions for Responsive Data Tables](http://exisweb.net/responsive-table-plugins-and-patterns)
- [كيف تتعامل مع الجداول في المواقع المتجاوبة Responsive](http://www.outofpalbox.net/2015/05/how-to-deal-with-tables-in-responsive-websites)

