import React, {PropTypes} from 'react';

export default class InfiniteScroll extends React.Component {
    static propTypes = {
        bufferPx: PropTypes.number,
        callback: PropTypes.func,
        autoFirstLoad: PropTypes.bool,
        style: PropTypes.object
    };
    static defaultProps = {
        bufferPx: 40,
        autoFirstLoad: false,
        style: {}
    };

    constructor() {
        super();
        this.dom = null;
        this.timer = null;
    }

    componentDidMount() {
        if (!this.dom) {
            return false;
        }
        this.dom.addEventListener('scroll', (e) => {
            if (this.checkScrollBottom()) {
                this.throttle(this.props.callback);
            }
        });
        if (this.props.autoFirstLoad) {
            this.props.callback();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            if (!this.checkBottom()) {
                this.throttle(this.props.callback);
            }
        }
    }


    throttle(func, time = 150) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            if (typeof func === 'function') {
                func();
            }
        }, time);
    }

    checkScrollBottom() {
        if (!this.dom) {
            return false;
        }
        if (this.dom.scrollTop === 0) {
            return true;
        }
        return this.dom.scrollTop + this.dom.clientHeight + this.props.bufferPx >= this.dom.scrollHeight;
    }

    checkBottom() {
        if (!this.dom) {
            return true;
        }
        if (!this.dom.lastChild) {
            return false;
        }
        return this.dom.lastChild.offsetTop + this.props.bufferPx >= this.dom.scrollTop + this.dom.clientHeight;
    }

    componentWillUnmount() {
        this.dom.removeEndEventListener('scroll');
    }

    render() {
        return (
            <div ref={(ref) => this.dom = ref}
                 style={this.props.style}
            >
                {this.props.children}
            </div>
        )
    }
}