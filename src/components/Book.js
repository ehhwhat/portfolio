import React, { Component } from 'react';

class Books extends Component {
    render() {

        let data = this.props.data;
        let numberOfBooks = data.length;

        let cardSize = '';
        if(this.props.size === 'large') {
            cardSize = 'col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 ';
        } else if (this.props.size === 'medium') {
            cardSize = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2';
        } else {
            cardSize = 'col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1';
        }

        let orderedTitleAlphaAZ = data.sort(function(a,b) {
            let textA = a.Title.toUpperCase();
            let textB = b.Title.toUpperCase();
            return textA.localeCompare(textB);
        })

        let dataList = orderedTitleAlphaAZ.map((book, i) =>
            <div className={cardSize} id={'book'+i} key={'book'+i}>
                <div className="book card rounded-0" id="" style={{
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
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
                {dataList}
                <div className={`${cardSize} d-flex align-items-center justify-content-center`} key={'total'}>
                    <span className={'display-1'}>{numberOfBooks}</span>
                </div>
            </section>
        );
    }
}

export default Books; // Don’t forget to use export default!
