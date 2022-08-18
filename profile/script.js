$.getJSON('https://cr.is-a.dev/JRCLJUQ0', function(data){
    var display = `
    <div class="card">
    <div class="img">
      <img src="https://media.brawltime.ninja/avatars/${data.icon.id}.webp?size=400">
    </div>
    <div class="infos">
      <div class="name">
        <h2>${data.name}</h2>
        <h4>${data.tag}</h4>
      </div>
      <p class="text">
        Hi, I'm <b>${data.name}.</b> I really love playing Brawl Stars and <b>${data.brawlers[ 0 ].name}</b> is my favorite Brawler! Now I have <b>${data.trophies}</b> trophies.
      </p>
      <ul class="stats">
        <li>
          <h3>${data['3vs3Victories']}</h3>
          <h4>3v3 Win</h4>
        </li>
        <li>
          <h3>${data.duoVictories}</h3>
          <h4>Duo Win</h4>
        </li>
        <li>
          <h3>${data.soloVictories}</h3>
          <h4>Solo Win</h4>
        </li>
      </ul>
      <div class="links">
        <a href="https://facebook.com/nan.phtml"><button class="follow">Add</button></a>
        <a href="https://brawltime.ninja/profile/JRCLJUQ0"><button class="view">View profile</button></a>
      </div>
    </div>
  </div>
`
    $(".display").html(display);
  });
