
Asks the user for a number n and prints the sum of the numbers 1 to n

I built this little program in june 2017. It seems after learning about the 3 object model in the Practical JS course, I wanted to apply it to other projects, no matter how simple. This is what I wrote back then:

it worked perfectly, but then I wanted to overcomplicate things and force this simple program into a MVC thing

al convertir este simple programa en MVC
el problema con el que me encontré es que no sabía cómo hacer para que 
view.showResult accediera a las variables declaradas dentro de
los métodos de los otros objetos, es decir result y usernumber.
La solución, ahora me parece evidente, era que la función
anónima de showResult contenta dos parámetros
llamémoslos por consistencia: usernumber y result.
Y entonces, cuando dentro de handlers.sendNum se invoca
al método view.showResult, lo hace enviándole las dos variables
creadas
usernumber a partir del input del usuario
result a partir de pasar ese input por el método app.sumup