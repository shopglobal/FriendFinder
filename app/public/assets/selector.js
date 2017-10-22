
        var config = {
            '.chosen-select': {},
            '.chosen-select-deselect': { allow_single_deselect: true },
            '.chosen-select-no-single': { disable_search_threshold: 10 },
            '.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
            '.chosen-select-width': { width: "95%" }
        }
        for (var selector in config) {
            $(selector).chosen(config[selector]);
        }

        var newFriend = {

        }

        $("#submit").on("click", function () {

            function validateForm() {
                var isValid = true;
                $('.form-control').each(function () {
                    if ($(this).val() === '')
                        isValid = false;
                });

                $('.chosen-select-no-single').each(function () {

                    if ($(this).val() === "")
                        isValid = false
                })
                return isValid;
            }
            if (validateForm() == true) {
                var surveyResults = [];

                for (var i = 1; i < 11; i++) {
                    surveyResults.push($("#q" + i).val());
                }

                var newFriend = {
                    "name": $("#name").val().trim(),
                    "picture": $("#photo").val().trim(),
                    "survey": surveyResults
                }
                console.log(newFriend);

                $.post("/api/friends", newFriend, function (data) {
                    if (data) {
                        console.log("matched with:", data);
                        $("#friendName").text(data.name);
                        $('#friendImg').attr("src", data.photo);
                        $("#modal").modal('toggle');
                    }

                    else {
                        // error 
                    }

                });
            }
            else {
                alert("Please fill out all fields before submitting!");
            }
        });