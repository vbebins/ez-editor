$(document).ready(function () {
    function generateJSON() {
        let jsonData = {
            type: "image",
            imageUrl: $("#image-url").val(),
            imageLink: $("#image-link").val(),
            message: $("#message").val(),
            buttons: []
        };

        $(".button-row").each(function () {
            let buttonData = {
                type: $(this).find(".button-type").val(),
                text: $(this).find(".button-text").val(),
                iosScheme: $(this).find(".ios-scheme").val(),
                androidScheme: $(this).find(".android-scheme").val()
            };
            jsonData.buttons.push(buttonData);
        });

        return jsonData;
    }

    $("#add-button").click(function () {
        $("#buttons-container").append(`
            <div class='button-row'>
                <select class='button-type'>
                    <option value='app_link'>App link</option>
                </select>
                <input type='text' class='button-text' placeholder='Button text' />
                <input type='text' class='ios-scheme' placeholder='iOS scheme' />
                <input type='text' class='android-scheme' placeholder='Android scheme' />
                <button class='remove-button'>X</button>
            </div>
        `);
    });

    $("#buttons-container").on("click", ".remove-button", function () {
        $(this).closest(".button-row").remove();
    });

    $("#done-designing").click(function () {
        let jsonOutput = generateJSON();
        if (typeof onEditorComplete === "function") {
            onEditorComplete(jsonOutput);
        }
    });
});

// Callback function example
function onEditorComplete(jsonData) {
    console.log("Generated JSON:", JSON.stringify(jsonData, null, 2));
}
