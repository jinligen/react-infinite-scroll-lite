import React from 'react';
import ReactDom from 'react-dom';

import InfiniteScroll from '../index';

class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            children: []
        };
        this.key = 0;
    }

    load() {
        let children = this.state.children.concat(this.generateDom(10));
        this.setState({
            children
        });
    }

    generateDom(num) {
        let doms = [];
        for (let i = 0; i < num; i++) {
            doms.push(<p key={this.key++}>hehehe</p>);
        }
        return doms;
    }

    render() {
        return (<InfiniteScroll
            callback={() => {
                this.load();
            }} autoFirstLoad={true}
            style={{
                height: '600px',
                border: '1px #ccc solid',
                overflowY: 'auto'
            }}>
            {this.state.children}
        </InfiniteScroll>)
    }
}

ReactDom.render(<Demo />, document.getElementById('place'));