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
    submitName: function(event){
        event.preventDefault();
        this.props.newPerson.send(this.state.name);
        this.state.name = '';
    },
    handleChange: function(event) {
        this.setState( { name: event.target.value } );
    },
    render: function() {
        return (
            <form onSubmit={this.submitName} >
                <input type="text" 
                    value={this.state.name} 
                    onChange={this.handleChange} />
            </form>
        );
    }
});

var UniqueNamesCheckbox = React.createClass({
    handleChange: function(event) {
        this.props.unique.send(event.target.checked);
    },
    render: function() {
        return (
            <div>
                <label>Only show unique names?</label>
                <input type="checkbox" 
                    onChange={this.handleChange}/>
            </div>
        );
    }
});


var PeopleDisplay = React.createClass({
    getInitialState: function() {
        return {
            people: [],
            elmApp : Elm.worker(Elm.People, { newPerson: "", isUnique: false })
        };

    },
    componentDidMount: function() {
        this.state.elmApp.ports.names.subscribe(function(names){
            this.setState({ people: names });
        }.bind(this));
    },
    render: function(){
        return (
            <div>
                <UniqueNamesCheckbox unique={this.state.elmApp.ports.isUnique}/>
                <NameList users={this.state.people} />
                <AddPerson newPerson={this.state.elmApp.ports.newPerson} />
            </div>
        );
    }
});