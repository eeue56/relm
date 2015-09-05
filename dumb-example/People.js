var Name = React.createClass({
    render: function() {
        return <div>Name: {this.props.name} </div>;
    }
});

var NameList = React.createClass({
    render: function() {
        return (
            <ul>
            {this.props.users.map(function(name) {
                return (<li>
                    <Name key={name} name={name}/>
                </li>);
            })}
            </ul>
        );
    }
});

var AddPerson = React.createClass({
    getInitialState: function() {
        return { name: '' };
    },
    submitName: function(){
        this.props.newPerson.send(this.state.name);
        this.state.name = '';
    },
    handleChange: function(event) {
        this.setState( { name: event.target.value } );
    },
    render: function() {
        return (
            <form action='#' onSubmit={this.submitName} >
                <input type="text" 
                    value={this.state.name} 
                    onChange={this.handleChange} />
            </form>
        );
    }
});

var PeopleDisplay = React.createClass({
    getInitialState: function() {
        return {
            people: [],
            elmApp : Elm.worker(Elm.People, { newPerson: "" })
        };

    },
    componentDidMount: function() {
        // console.log(this.state);
        // this.state.elmApp.ports.newPerson.send("Dave");
        this.state.elmApp.ports.people.subscribe(function(people){
            this.setState({ people: people });
        }.bind(this));
    },
    render: function(){
        return (
            <div>
                <NameList users={this.state.people} />
                <AddPerson newPerson={this.state.elmApp.ports.newPerson} />
            </div>
        );
    }
});