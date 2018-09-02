$(function () {
  var h = $(window).height();

  $("#wrap").css('display', 'none');
  $('#loader-bg', '#loader').height(h).css('display', 'block');
});

window.addEventListener('load', init);

$(window).load(function () {
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

function init() {

  var welcome = $("#welcome");
  var effectList = [];
  var elementList = document.querySelectorAll('.shuffleEffect');

  // Shuffle the contents of container
  welcome.shuffleLetters();

  setTimeout(function () {
    // Shuffle the container with custom text
    welcome.shuffleLetters({
      text: "My Portfolio"
    });
  }, 2500);

  setTimeout(function () {
    $('#welcome').hide();
  }, 3800);

  setTimeout(function () {
    $('#myCanvas').addClass('animate');
    $('#myCanvas').css({
      opacity: 1.0
    });
  }, 4300);

  for (var i = 0; i < elementList.legnth; i++) {
    var element = elementList[i];
    element.dataset.index = i;

    // インスタンスを取得する
    effectList[i] = element.shuffleLetters();
    effectList[+this.dataset.index].shuffleLetters();
  }

  // Three.js 
  $(function Threejs() {

    const width = $(window).width();
    const height = $(window).height();
    let rot = 0; // 角度

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#myCanvas"),
    });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);

    // 平行光源を作成
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const material = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load('sample1/nasa-world-map.jpg'),
      side: THREE.DoubleSide,
    });

    // 球体の形状を作成します
    const geometry = new THREE.SphereGeometry(300, 30, 30);
    // 形状とマテリアルからメッシュを作成します
    const earthMesh = new THREE.Mesh(geometry, material);
    // シーンにメッシュを追加します
    scene.add(earthMesh);

    // 星屑を作成します 
    createStarField();

    function createStarField() {
      // 形状データを作成
      const geometry = new THREE.Geometry();
      for (let i = 0; i < 1000; i++) {
        geometry.vertices.push(new THREE.Vector3(
          3000 * (Math.random() - 0.5),
          3000 * (Math.random() - 0.5),
          3000 * (Math.random() - 0.5),
        ));
      }
      // マテリアルを作成
      const material = new THREE.PointsMaterial({
        size: 10,
        color: 0xFFFFFF
      });

      // 物体を作成
      const mesh = new THREE.Points(geometry, material);
      scene.add(mesh);
    }

    // // マウス座標はマウスが動いた時のみ取得できる
    // document.addEventListener('mousemove', (event) => {
    //     mouseX = event.pageX;
    // });

    tick();

    function tick() {
      // // マウスの位置に応じて角度を設定
      // // マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
      // const targetRot = (mouseX / window.innerWidth) * 360;
      // // イージングの公式を用いて滑らかにする
      // // 値 += (目標値 - 現在の値) * 減速値
      // rot += (targetRot - rot) * 0.02;

      rot += 0.5; // 毎フレーム角度を0.5度ずつ足していく

      // ラジアンに変換する
      const radian = rot * Math.PI / 180;
      // 角度に応じてカメラの位置を設定
      camera.position.x = 1000 * Math.sin(radian);
      camera.position.z = 1000 * Math.cos(radian);
      // 原点方向を見つめる
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      // 地球は常に回転させておく
      earthMesh.rotation.y += 0.01;

      renderer.render(scene, camera);

      requestAnimationFrame(tick);
    }
  });
};