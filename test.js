function onReady() {
	var materialMatch = require('./');
	var View = require('threejs-managed-view').View;
	var view = new View({
		stats: true
	});
	view.renderer.setClearColor(0x999999);

	view.scene.add(new THREE.HemisphereLight(0xafbfef, 0x7f4f3f));

	var materials = {
		red: new THREE.MeshPhongMaterial({
			color: 0x9f2f2f
		}),
		green: new THREE.MeshPhongMaterial({
			color: 0x7fef7f
		}),
		blue: new THREE.MeshPhongMaterial({
			color: 0x7f7fef
		}),
		white: new THREE.MeshPhongMaterial({
			color: 0xefdfcf,
			emissive: 0x5f5f4f
		})
	}

	materialMatch.defaultMaterial = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		emissive: 0xff0000,
		wireframe: true
	})

	var names = ['red', 'green', 'blue', 'white', 'milk', 'honey'];
	var geom = new THREE.SphereGeometry(.5, 16, 8);
	for (var i = 50; i >= 0; i--) {
		var ball = new THREE.Mesh(geom);
		ball.position.x = (Math.random() - .5) * 6;
		ball.position.y = (Math.random() - .5) * 6;
		ball.position.z = (Math.random() - .5) * 6;
		ball.materialName = names[i % names.length];
		materialMatch(ball, materials);
		view.scene.add(ball);
		console.log(ball.materialName);
	};

}

var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts(
	[
		'bower_components/three.js/three.js',
		'lib/stats.min.js',
		'lib/threex.rendererstats.js',
	],
	onReady
);