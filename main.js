canvas = new fabric.Canvas("myCanvas");
var b_parts_height = 30;
var b_parts_width = 30;
var player_object = "";
player_x = 10;
player_y = 10;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(200);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        b_parts_img_object = Img;
        b_parts_img_object.scaleToWidth(b_parts_width);
        b_parts_img_object.scaleToHeight(b_parts_height);
        b_parts_img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(b_parts_img_object);
    });

}





























