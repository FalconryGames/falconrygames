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
});
