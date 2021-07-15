import React, {Component} from 'react';
import Card from '../components/Card';

class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?sort=-date_start&limit=1&pretty=false&timezone=UTC')
            .then(res => res.json())
            .then(json => json.records.map(record => record.record))
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });

    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Chargement...</div>;
        }

        else {

            return (
                <div className="App">
                    <ul>
                        {items.map((item, index) => (
                            <Card 
                                id={item.id}
                                title={item.fields.title}
                                img={item.fields.cover.url}
                                alt={item.fields.cover_alt}
                                date={item.fields.date_start}
                                desc={item.fields.lead_text}
                            />
                        ))}
                    </ul>
                </div>
            );
        }

    }
}

export default App;