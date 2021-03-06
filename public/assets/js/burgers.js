$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newWasEaten = {
            devoured: 1
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newWasEaten
        }).then(
            function () {
                console.log("changed devoured to", newBurger);

                location.reload();
            }
        );
    })


    $("#burButton").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#bur").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


})
