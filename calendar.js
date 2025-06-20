document.addEventListener('DOMContentLoaded', function() {
    
    const rewards = [
        { title: "5 Battle Pass Levels", description: "Increase your Battle Pass level by 5" },
        { title: "Dota Plus Shards", description: "500 Dota Plus Shards to unlock rewards" },
        { title: "Random Hero Set", description: "Unlock a random hero set from current collection" },
        { title: "Chat Wheel Sound", description: "Exclusive new sound for your chat wheel" },
        { title: "10 Battle Pass Levels", description: "Increase your Battle Pass level by 10" },
        { title: "Turbo Mode Tokens", description: "5 Turbo Mode bonus tokens" },
        { title: "Exclusive Courier", description: "Special event-themed courier" },
        { title: "15 Battle Pass Levels", description: "Increase your Battle Pass level by 15" },
        { title: "Hero Relic", description: "Dota Plus hero relic to track your stats" },
        { title: "Loading Screen", description: "Exclusive loading screen artwork" },
        { title: "20 Battle Pass Levels", description: "Increase your Battle Pass level by 20" },
        { title: "Announcer Pack", description: "Special event announcer pack" },
        { title: "Terrain Skin", description: "New battlefield terrain" },
        { title: "25 Battle Pass Levels", description: "Increase your Battle Pass level by 25" },
        { title: "Weather Effect", description: "Exclusive in-game weather effect" },
        { title: "30 Battle Pass Levels", description: "Increase your Battle Pass level by 30" },
        { title: "Immortal Treasure", description: "Treasure containing Immortal items" },
        { title: "35 Battle Pass Levels", description: "Increase your Battle Pass level by 35" },
        { title: "Exclusive HUD", description: "New custom HUD skin" },
        { title: "40 Battle Pass Levels", description: "Increase your Battle Pass level by 40" },
        { title: "Emoticon Pack", description: "Set of exclusive emoticons" },
        { title: "45 Battle Pass Levels", description: "Increase your Battle Pass level by 45" },
        { title: "Ward Skin", description: "Special ward skin" },
        { title: "50 Battle Pass Levels", description: "Increase your Battle Pass level by 50" },
        { title: "Music Pack", description: "Exclusive in-game music" },
        { title: "55 Battle Pass Levels", description: "Increase your Battle Pass level by 55" },
        { title: "Taunt", description: "Hero taunt item" },
        { title: "60 Battle Pass Levels", description: "Increase your Battle Pass level by 60" },
        { title: "Arcana Vote Token", description: "Vote for next Arcana hero" },
        { title: "100 Battle Pass Levels", description: "Increase your Battle Pass level by 100" }
    ];

    const modal = document.getElementById('reward-modal');
    const closeBtn = document.querySelector('.close');
    const claimBtn = document.getElementById('claim-reward');
    const rewardTitle = document.getElementById('reward-title');
    const rewardDescription = document.getElementById('reward-description');

    
    const days = document.querySelectorAll('.day:not(.header)');
    days.forEach((day, index) => {
        day.addEventListener('click', function() {
            if (this.classList.contains('reward-claimed')) {
                alert('Вы уже получили эту награду!');
                return;
            }
            
            const rewardIndex = Math.min(index, rewards.length - 1);
            const reward = rewards[rewardIndex];
            
           
            rewardTitle.textContent = reward.title;
            rewardDescription.textContent = reward.description;
            
          
            const dateElement = this.querySelector('.date');
            if (dateElement) {
                rewardDescription.textContent += `\n\nДата: ${dateElement.textContent}`;
            }
            
            modal.style.display = 'block';
            
           
            this.dataset.dayIndex = index;
        });
    });

   
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });


    claimBtn.addEventListener('click', function() {
        const activeDay = document.querySelector(`.day[data-day-index]:not(.reward-claimed)`);
        if (activeDay) {
         
            activeDay.classList.add('reward-claimed');
            

            const checkmark = document.createElement('div');
            checkmark.className = 'checkmark';
            checkmark.textContent = '✓';
            activeDay.appendChild(checkmark);
            
  
            claimBtn.textContent = 'Награда получена!';
            setTimeout(() => {
                modal.style.display = 'none';
                claimBtn.textContent = 'Получить награду';
            }, 1000);
            

        }
    });


    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});