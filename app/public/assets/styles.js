// Bringing in some color, will custom tailor the details later if need be.
// Routed the Themes API to localhost, may need to update, may work in production or may not in certain cases
// Mapped data to data[0].elementOrVariable this seems to be the case with other Express sites we work with, not always but a good start is data[0].elementWeNeed
// The JSON is a loop of themes, it presente the user a dropdown to select themes from the front-end. Locally stored the JSON object, using jQuery we load a new style.css over the last, and thus replace the style on the page in real-time!
$.getJSON("/api/themes", function (data) {
  var themes = data[0].themes;
  var select = $("#themes");
  select.show();
  $(".alert").toggleClass("alert-info alert-success");
  $(".alert h4").text("Success!");
  console.log(data);
  console.log(data[0]);
  console.log(data[0].themes);
  var selectAppend = function(){
    themes.forEach(function(value, index){
    select.append($("<option />")
          .val(index)
          .text(value.name));
  });
  }
  setTimeout(selectAppend, 900);
  selectAppend();
  select.change(function(){
    var theme = themes[$(this).val()];
    $("link").attr("href", theme.css);
    $("h5").text(theme.name);
  }).change();

}, "json").fail(function(){
    $(".alert").toggleClass("alert-info alert-danger");
    $(".alert h4").text("Failure!");
});
