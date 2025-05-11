    const dateTime = document.getElementById("datetime");
    const updateDateTime = () => {
    const now = new Date();
    dateTime.textContent = now.toLocaleString();
    };
    setInterval(updateDateTime, 1000);


    document.getElementById('contactForm').addEventListener('submit', function(e) {
        const confirmed = confirm("Are you sure you want to submit this form?");
        if (!confirmed) {
            e.preventDefault(); // Stops form from submitting
        }
    });

    function toggleFaq(id) {
    const content = document.getElementById(id);
    const all = document.querySelectorAll('.card-body');

    all.forEach(item => {
        if (item.id !== id) {
        item.classList.remove('show');
        }
    });

    content.classList.toggle('show');
    }
