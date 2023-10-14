//UI
class Ui{
    render(profile, repos){ 
        let _main = document.querySelector("main");
        if(_main){
            _main.remove();
        }

        //card String
        let cardString = repos.reduce((result, current) => {
            return result += `
                <div class="card p-2 mb-3">
                <a href="${current.html_url}" class="mb-3 fs-4">${current.name}</a>
                <p class="mn-3">${current.description}</p>
                <div class="mb-3">
                    <span class="badge bg-primary">${current.language}</span>
                    <span class="badge bg-info">${current.stargazers_count}</span>
                    <span class="badge bg-success">${current.forks_count}</span>
                </div>
                </div>
            `
        }, "");

        //tạo main mới
        let main = document.createElement("main");
        main.innerHTML = 
            `
        <div class="container">
        <div class="row">
            <!-- left -->
            <div class="col-4">
                <figure>
                    <img 
                        src="${profile.avatar_url}" 
                        style="
                            width: 150px; 
                            height: 150px;
                            object-fit: cover;"
                    />
                </figure>
                <!-- user name -->
                <h1 class="fs-3">${profile.login}</h1>
                <!-- bio -->
                <p style="text-align: center;">${profile.bio}</p>
                <!-- viewProfile -->
                <a class="btn btn-primary" href="#" target="_blank">${profile.html_url}</a>
                <div class="mb-3">
                    <span class="badge bg-primary">Following: ${profile.following}</span>
                    <span class="badge bg-info">Repos: ${profile.public_repos}</span>
                    <span class="badge bg-success">Follower: ${profile.followers}</span>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">
                        Website : <a href="${profile.blog}" target="_blank"> ${profile.blog}</a>
                    </li>
                    <li class="list-group-item">
                        Location:${profile.location}
                    </li>
                    <li class="list-group-item">
                        Create At:${profile.created_at}
                    </li>
                    <li class="list-group-item">
                        Twitter:${profile.twitter_username}
                    </li>
                </ul>
            </div>
            <!-- right -->
            <div class="col-8">
                <h2>Repository</h2>
                ${cardString}
            </div>
        </div>
        </div>
            `;
        document.body.insertBefore(main, document.querySelector("footer"));
    }
    // alert
    alert(message, type = "success"){
        const alertNode = document.createElement("div")
        alertNode.innerHTML = message;
        alertNode.className = `alert alert-${type}`
        document.querySelector("#notification").appendChild(alertNode);
        setTimeout(() => {
            alertNode.remove();
        }, 3000)
    }
}


















