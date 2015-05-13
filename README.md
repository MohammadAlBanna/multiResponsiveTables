# MultiResponsiveTables
Your website is fully responsive? What about tables? This library is for you!

# Normal Tables
![](http://i.imgur.com/UP1oQ2u.png)

# Using the library
![](http://i.imgur.com/TUavnEa.png)

#How to use (JavaScript)
- Call jQuery library.
- Call jquery.multiResponsiveTables.js library.
- Call tables you want to be responsive.

**In Code**
```
<script src="jquery.js"></script>
<script src="jquery.multiResponsiveTables.js"></script>
<script>
  // Calling multiResponsiveTables library for all tables elements in this page
  $(function(){
      $("table").multiResponsiveTables();
	});
</script>
```
#How to use (CSS)
**In Code**
```
<style>
		/* General style for tables */
		/* Main style taken from: http://codepen.io/dudleystorey/pen/Geprd */
		table.responsiveTable { 
			  margin: 0 auto;
			  border-collapse: collapse;
			  font-family: Agenda-Light, sans-serif;
			  font-weight: 100; 
			  background: #333; color: #fff;
			  text-rendering: optimizeLegibility;
			  border-radius: 5px; 
			}
			
		table.responsiveTable thead th { 
			font-weight: 600; 
		}

		table.responsiveTable thead th, table.responsiveTable tbody td { 
			  padding: .8rem; 
			  font-size: 1.4rem;
		}

		table.responsiveTable tbody td { 
			  padding: .8rem; 
			  font-size: 1.4rem;
			  color: #444; 
			  background: #eee; 
		}

		table.responsiveTable tbody tr:not(:last-child) { 
			  border-top: 1px solid #ddd;
			  border-bottom: 1px solid #ddd;  
		}

		/* This part is very important for responsive screens less than 600px in width */
		@media screen and (max-width: 600px) {
			  table.responsiveTable thead { 
			  	display: none; 
		  }
		
		  table.responsiveTable tbody td { 
			    display: block; 
			    padding: .6rem; 
		  }
		
		  table.responsiveTable tbody tr td:first-child { 
			    background: #666; 
			    color: #fff; 
		  }
		
		  table.responsiveTable tbody td:before { 
			    content: attr(data-th); 
			    font-weight: bold;
			    display: inline-block;
			    padding-right: 10px;   
			  }
		}
		</style>
```
#URLs
- [10+ Solutions for Responsive Data Tables](http://exisweb.net/responsive-table-plugins-and-patterns)
- [كيف تتعامل مع الجداول في المواقع المتجاوبة Responsive](http://www.outofpalbox.net/2015/05/how-to-deal-with-tables-in-responsive-websites)

