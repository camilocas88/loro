var container = document.getElementById('anim_container');
      // Set up our animation 

      var animData = {
          container: container,
          renderer: 'svg',
          autoplay: true,
          loop: true,
          path : 'animation.json'
      };
      var anim = bodymovin.loadAnimation(animData);