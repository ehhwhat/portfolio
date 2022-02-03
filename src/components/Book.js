import React, { Component } from 'react';

class Books extends Component {
    render() {
        console.log(this.props.size);
        console.log(this.props.data.length)

        let numberOfBooks = this.props.data.length;

        let cardSize = '';
        if(this.props.size === 'large') {
            console.log('make cards big');
            cardSize = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 ';
        } else if (this.props.size === 'medium') {
            console.log('make cards medium');
            cardSize = 'col-12 col-sm-6 col-md-3 col-lg-2 col-xl-2';
        } else {
            console.log('make cards small');
            cardSize = 'col-12 col-sm-4 col-md-3 col-lg-1 col-xl-1';
        }

        let dataList = this.props.data.map((book, i) =>
            <div className={cardSize} id={'book'+i} key={'book'+i}>
                <div className="book card vh-min-50 rounded-0" id="" style={{
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:`url(${book.Cover})`
                }}>
                    <div className="card-body p-4 d-flex align-items-end">
                        <div className={'book__overlay'}></div>
                        <div className={'book__content'}>
                            <p className={'book__title display-6'}>{book.Title}</p>
                            <ul className="list-inline book__primary-stats">
                                <li className="list-inline-item">By {book.Author}</li>
                                <li className="list-inline-item">{book['Date Read']}</li>
                            </ul>
                            <ul className="list-inline book__secondary-stats">
                                <li className="list-inline-item">Publish by {book.Publisher} in {book['Year Published']}</li>
                                <li className="list-inline-item">Rating {book['My Rating']}/5</li>
                                <li className="list-inline-item">{book['Number of Pages']} pages</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <section className="row section-row justify-content-start g-0 books">
                <h1 className={'display-6 text-center'}>{numberOfBooks}</h1>
                {dataList}
            </section>
        );
    }
}

export default Books; // Don’t forget to use export default!
