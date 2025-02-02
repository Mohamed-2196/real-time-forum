export let footer = `
<footer>
    <div id="last-banner">
        <div id="left-con">
            <p class="footer-text">Created By: Space Chat Team</p>
        </div>
        <p class="footer-text">© 2024 Da Forum. All rights reserved.</p>
    </div>
</footer>

<style>
    a {
        color: inherit;
        text-decoration: underline 0.1em rgba(255, 255, 255, 0);
        transition: text-decoration-color 300ms;
    }

    a:hover {
        text-decoration-color: rgba(255, 255, 255, 1);
    }

    footer {
        width: 100%;
    }

    #last-banner {
        display: flex;
        height: 70px;
        /* background-color: #b41739; */
        /* background-color: #1e2022; */
        background-color: #1E1E1E;
        justify-content: space-around;
        align-items: center;
    }

    #left-con {
        display: flex;
        justify-content: space-between;
        width: 600.53px;
        height: 60.8px;
        align-items: center;
    }

    .footer-text {
        text-align: center;
        color: white;
        font-size: large;
        margin-right: 20px;
    }


    .link-text-bottom {
        font-size: large;
        color: white;
    }


    #links-bottom {
        /* margin-right: 600px; */
        display: flex;
        align-items: center;
        justify-content: space-around;
        /* background-color: #b41739; */
        width: 291px;
        height: 40px;
        margin-right: 60px;
    }

    #logo-bottom {
        margin-left: 10px;
        height: 60px;
        width: 60px;
        justify-self: start;
        /* background-color: beige; */
        border-radius: 5px;
    }
</style>`
