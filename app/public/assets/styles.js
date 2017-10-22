 // bringing in some color, will custom tailor the details later if need be
  // the JSON is a loop of themes, it presente the user a dropdown to select themes from the front-end. Locally stored the JSON object, using jQuery we load a new style.css over the last, and thus replace the style on the page in real-time!
 $.getJSON("/bootswatch.json", function (data) {
  var themes = data.themes;
  var select = $("select");
  select.show();
  $(".alert").toggleClass("alert-info alert-success");
  $(".alert h4").text("Success!");
  
  themes.forEach(function(value, index){
    select.append($("<option />")
          .val(index)
          .text(value.name));
  });
  
  select.change(function(){
    var theme = themes[$(this).val()];
    $("link").attr("href", theme.css);
    $("h5").text(theme.name);
  }).change();

}, "json").fail(function(){
    $(".alert").toggleClass("alert-info alert-danger");
    $(".alert h4").text("Failure!");
});