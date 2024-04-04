
const email_template = (to, content) => {
    return `<div>
                <h1> Hi, ${to}</h1>
                <hr/>

                <div style="margintop:'30px';padding:'20px';background:'orange';">
                     ${content}
                </div>
            </div>`
}

module.exports = email_template