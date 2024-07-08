document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('search-icons').addEventListener('click', function () {
                        var searchBox = document.querySelector('.search-wrapper');
                        if (searchBox.style.display === 'none' || searchBox.style.display === '') {
                                    searchBox.style.display = 'block';
                        } else {
                                    searchBox.style.display = 'none';
                        }
            });
});
function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');
            
           
            if (sidebar.style.left === '0px' || sidebar.style.left === '') {
                sidebar.style.left = '-250px'; 
                overlay.style.display = 'block'; 
            } else {
                sidebar.style.left = '0px'; 
                overlay.style.display = 'none'; 
            }
        }
        
