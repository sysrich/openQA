function updateModuleslist(modlist, testname, testmodule) {
	var container = $("modlist_content");
	container.innerHTML = "";
	modlist.each(function(category) {
		var title = new Element("h2", {'class': "box-subheader modcategory"}).update(category.category);
		var ul = new Element("ul", {'class': "navigation modcategory" })
		category.modules.each(function(module) {
			var li = new Element("li");
			li.addClassName("mod-"+module.state);
			li.addClassName("result"+module.result);
			if (testmodule == module.name) { li.addClassName("selected"); }
			li.update(new Element("a", {href: "/tests/"+testname+"/modules/"+module.name+"/steps/1"}).update(module.name));
			ul.insert(li);
		});
		container.insert(title);
		container.insert(ul);
	});
}

document.observe('dom:loaded', function(evt) {
    var elements = $$('.chosen-select');
    for (var i = 0; i < elements.length; i++) {
        new Chosen(elements[i], {width: "98%"});
    }
});

// loads a data-url img into a canvas
function load_canvas(canvas, dataURL) {
    var context = canvas.getContext('2d');

    // load image from data url
    var scrn = new Image();
    scrn.onload = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(this, 0, 0, width=canvas.width, height=canvas.height);
    };
    scrn.src = dataURL;
}
