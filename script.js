document.addEventListener('DOMContentLoaded', function() {
    // Existing login menu functionality
    const loginTrigger = document.querySelector('.login-trigger');
    const loginOptions = document.querySelector('.login-options');
    let isLoginOptionsVisible = false;

    if (loginTrigger && loginOptions) {
        loginTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            isLoginOptionsVisible = !isLoginOptionsVisible;
            loginOptions.style.display = isLoginOptionsVisible ? 'block' : 'none';
        });

        document.addEventListener('click', function(e) {
            if (!loginTrigger.contains(e.target) && !loginOptions.contains(e.target)) {
                isLoginOptionsVisible = false;
                loginOptions.style.display = 'none';
            }
        });
    }

    // Login form functionality
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Mock authentication (replace with actual server-side authentication)
            if (username === 'demo' && password === 'password') {
                loginMessage.textContent = 'Login successful!';
                loginMessage.style.color = '#14FFEC';
                // Redirect to member area or perform other actions
                window.location.href = 'profile.html'; // Redirect to profile page
            } else {
                loginMessage.textContent = 'Invalid username or password.';
                loginMessage.style.color = '#FF3333';
            }
        });
    }

    // Logout and Member Login functionality
    const logoutLink = document.querySelector('.login-options a[href="logout.html"]');
    const memberLoginLink = document.querySelector('.login-options a[href="member-login.html"]');

    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Perform any logout actions here (e.g., clearing session data)
            window.location.href = 'index.html';
        });
    }

    if (memberLoginLink) {
        memberLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'member-login.html';
        });
    }

    // New profile page functionality
    const avatar3D = document.getElementById('avatar3D');
    if (avatar3D) {
        // 3D Avatar
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: avatar3D });
        renderer.setSize(150, 150);

        // Replace cube geometry with icosahedron (20-sided die)
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.MeshBasicMaterial({ color: 0x14FFEC, wireframe: true });
        const icosahedron = new THREE.Mesh(geometry, material);
        scene.add(icosahedron);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            icosahedron.rotation.x += 0.01;
            icosahedron.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    }

    // Dynamic Achievements
    const achievementGrid = document.querySelector('.achievement-grid');
    if (achievementGrid) {
        const achievements = [
            { name: "First Win", icon: "🏆" },
            { name: "10 Games", icon: "🎮" },
            { name: "Perfect Game", icon: "💯" },
            // Add more achievements as needed
        ];

        achievements.forEach(achievement => {
            const achievementItem = document.createElement('div');
            achievementItem.className = 'achievement-item';
            achievementItem.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
            `;
            achievementGrid.appendChild(achievementItem);
        });
    }

    // State dropdown functionality
    const stateSelect = document.getElementById('state');
    if (stateSelect) {
        const states = [
            { name: "Alabama", abbreviation: "AL" },
            { name: "Alaska", abbreviation: "AK" },
            { name: "Arizona", abbreviation: "AZ" },
            { name: "Arkansas", abbreviation: "AR" },
            { name: "California", abbreviation: "CA" },
            { name: "Colorado", abbreviation: "CO" },
            { name: "Connecticut", abbreviation: "CT" },
            { name: "Delaware", abbreviation: "DE" },
            { name: "District Of Columbia", abbreviation: "DC" },
            { name: "Florida", abbreviation: "FL" },
            { name: "Georgia", abbreviation: "GA" },
            { name: "Hawaii", abbreviation: "HI" },
            { name: "Idaho", abbreviation: "ID" },
            { name: "Illinois", abbreviation: "IL" },
            { name: "Indiana", abbreviation: "IN" },
            { name: "Iowa", abbreviation: "IA" },
            { name: "Kansas", abbreviation: "KS" },
            { name: "Kentucky", abbreviation: "KY" },
            { name: "Louisiana", abbreviation: "LA" },
            { name: "Maine", abbreviation: "ME" },
            { name: "Maryland", abbreviation: "MD" },
            { name: "Massachusetts", abbreviation: "MA" },
            { name: "Michigan", abbreviation: "MI" },
            { name: "Minnesota", abbreviation: "MN" },
            { name: "Mississippi", abbreviation: "MS" },
            { name: "Missouri", abbreviation: "MO" },
            { name: "Montana", abbreviation: "MT" },
            { name: "Nebraska", abbreviation: "NE" },
            { name: "Nevada", abbreviation: "NV" },
            { name: "New Hampshire", abbreviation: "NH" },
            { name: "New Jersey", abbreviation: "NJ" },
            { name: "New Mexico", abbreviation: "NM" },
            { name: "New York", abbreviation: "NY" },
            { name: "North Carolina", abbreviation: "NC" },
            { name: "North Dakota", abbreviation: "ND" },
            { name: "Ohio", abbreviation: "OH" },
            { name: "Oklahoma", abbreviation: "OK" },
            { name: "Oregon", abbreviation: "OR" },
            { name: "Pennsylvania", abbreviation: "PA" },
            { name: "Rhode Island", abbreviation: "RI" },
            { name: "South Carolina", abbreviation: "SC" },
            { name: "South Dakota", abbreviation: "SD" },
            { name: "Tennessee", abbreviation: "TN" },
            { name: "Texas", abbreviation: "TX" },
            { name: "Utah", abbreviation: "UT" },
            { name: "Vermont", abbreviation: "VT" },
            { name: "Virginia", abbreviation: "VA" },
            { name: "Washington", abbreviation: "WA" },
            { name: "West Virginia", abbreviation: "WV" },
            { name: "Wisconsin", abbreviation: "WI" },
            { name: "Wyoming", abbreviation: "WY" }
        ];

        let optionsHTML = '<option value="">Select a State</option>';
        states.forEach(state => {
            optionsHTML += `<option value="${state.abbreviation}">${state.name}</option>`;
        });

        stateSelect.innerHTML = optionsHTML;
    }

     // Profile Form and Preview Functionality
    const profileForm = document.getElementById('profileForm');
    const profilePreview = document.getElementById('profilePreview');
    
    if (profileForm && profilePreview) {
        const previewName = document.getElementById('previewName');
        const previewGamingRecord = document.getElementById('previewGamingRecord');
        const previewInterests = document.getElementById('previewInterests');

        profileForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            // Get form values
            const name = document.getElementById('name').value.trim();
            const gamingRecord = document.getElementById('gamingRecord').value.trim();
            const interests = document.getElementById('interests').value.trim();

            // Update the preview section
            previewName.textContent = name || "N/A";
            previewGamingRecord.textContent = gamingRecord || "N/A";
            previewInterests.textContent = interests || "N/A";

            // Show the preview section
            profilePreview.classList.remove('hidden');
            
            alert("Profile saved successfully!");
            
            // Optionally save data to local storage or send it to a server here
            // Example:
            // localStorage.setItem("memberProfile", JSON.stringify({ name, gamingRecord, interests }));
            
            // Reset form fields
            profileForm.reset();
        });
    }

    // Category checkbox functionality
    const tcgsCheckbox = document.getElementById('tcgsCheckbox');
    const miniatureCheckbox = document.getElementById('miniatureCheckbox');
    const rolePlayingCheckbox = document.getElementById('rolePlayingCheckbox');
    const boardGamesCheckbox = document.getElementById('boardGamesCheckbox');

    const tcgsOptions = document.getElementById('tcgsOptions');
    const miniatureOptions = document.getElementById('miniatureOptions');
    const rolePlayingOptions = document.getElementById('rolePlayingOptions');
    const boardGamesOptions = document.getElementById('boardGamesOptions');

     if (tcgsCheckbox && miniatureCheckbox && rolePlayingCheckbox && boardGamesCheckbox &&
        tcgsOptions && miniatureOptions && rolePlayingOptions && boardGamesOptions) {
        tcgsCheckbox.addEventListener('change', function() {
            tcgsOptions.classList.toggle('hidden', !this.checked);
        });

        miniatureCheckbox.addEventListener('change', function() {
            miniatureOptions.classList.toggle('hidden', !this.checked);
        });

        rolePlayingCheckbox.addEventListener('change', function() {
            rolePlayingOptions.classList.toggle('hidden', !this.checked);
        });

        boardGamesCheckbox.addEventListener('change', function() {
            boardGamesOptions.classList.toggle('hidden', !this.checked);
        });
    }
});
