export enum AttributeSuggest {
    "pictureprofile" = "pictureprofile",
    "user" = "user",
}

class MySuggest extends HTMLElement {
    pictureprofile?: any;
    user?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeSuggest,null> = {
            pictureprofile: null,
            user: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeSuggest, 
        oldValue: string | undefined, 
        newValue: string | undefined){
            this[propName] = newValue;
            this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Suggest/Suggest.css">
            <section class="suggestBoxContainer">
                <section class="suggestProfile">
                    <img src="https://yt3.ggpht.com/GUW78kIdMM2mVjl-c1rkSD8DqNYSRZAfTUTie3j4xKFN6agTpdb9UiMDGwQB2yuoDpKB1a8QNn8=s900-c-k-c0x00ffffff-no-rj">
                    <h3>dilancano_ <br> <span>Dilan $teven Cano</span></h3>
                </section>
                <section class="suggestText">
                    <h2>Suggestions for you</h2>
                    <h3>View all</h3>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://scontent.fbog1-2.fna.fbcdn.net/v/t39.30808-6/272859211_6947220261985886_7734054466142436483_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cD7btTvwUE4AX_h8vjV&_nc_ht=scontent.fbog1-2.fna&oh=00_AT8BH8UJFE3DQxaQOGiXc4ysjZ0FaFNCZVt3DGnBiSyU1A&oe=63313C32">
                        <h1>deportivocali <br> <span>Followed by nicolasmr21 and 3 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Arc%C3%A1ngel_%22La_Entrevista%22_-_A_solas_con_Tony_Dandrades.jpg">
                        <h1>arcangel <br> <span>Followed by santygr34 and 29 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>
                <section class="suggestBox">
                    <section>
                        <img src="https://thumbs.dreamstime.com/b/fondo-negro-vectorial-del-logotipo-de-nike-marca-para-uso-impreso-ropa-deportiva-y-fitness-183282388.jpg">
                        <h1>nike <br> <span>Followed by badbunnypr and 49 more</span></h1>
                    </section>
                    <h2>Follow</h2>
                </section>

            </section>`;
        }
    }
}

customElements.define("my-suggest", MySuggest);
export default MySuggest;