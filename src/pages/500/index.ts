import Block from "../../utils/Block";
import {Link} from "../../components/link";

import  template from "./500.hbs"



export class Page500 extends Block{
    constructor(props: {}) {
        super('section', {...props});
        this.element!.classList.add('error-page')
    }
    init() {
        this.children.link = new Link({
            label: "Назад к чатам",
            href: "/"
        });
    }

    render() {
        return this.compile(template, this.props)

    }
}