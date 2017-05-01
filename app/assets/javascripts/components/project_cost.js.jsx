var ProjectCost = React.createClass({

    calculateCost: function () {
        totalCost = 0;

        this.props.projects.map(function (project) {
            cost = project.project_cost == null || project.project_cost == undefined ? 0 : parseFloat(project.project_cost)
            totalCost += cost;
        })

        return totalCost.toFixed(2);
    },

    calculateNetCost: function () {
        totalNetCost = 0;

        this.props.projects.map(function (project) {
            cost = project.project_net_cost == null || project.project_net_cost == undefined ? 0 : parseFloat(project.project_net_cost)
            totalNetCost += cost;
        })

        return totalNetCost.toFixed(2);
    },

    render: function () {

        return (
            <div className = 'row'>
                <div className = 'd-inline-block col-sm-3' style={{marginTop: "30px"}}>
                    <h4>
                        Total Project Cost
                    </h4>
                    <h4>
                        {this.calculateCost()}
                    </h4>
                </div>
                <div className = 'd-inline-block col-sm-3' style={{marginTop: "30px"}}>
                    <h4>
                        Total Project NetCost
                    </h4>
                    <h4>
                        {this.calculateNetCost()}
                    </h4>
                </div>
            </div>
        );

    }

});
