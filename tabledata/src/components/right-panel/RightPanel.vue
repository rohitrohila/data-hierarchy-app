data:<template>
    <div>
        <organization-chart :datasource="chartData[0]" @node-click="handleClick"></organization-chart>
    </div>
</template>

<script>
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'

// import data from "../../data.json";
import { get } from "../../services/hierarchyData.js"
import { getFormatedData } from "../../utils/comman.js"


export default {
    components: { OrganizationChart },
    props: {
        getSelectedData: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            chartData: []
        };
    },

    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const data = await get('/getData');
                this.chartData = getFormatedData(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },

        handleClick(e) {
            this.getSelectedData(e)
        },
    },
};
</script>

<style>
.orgchart-container {
    border: none;
    width: auto;
}

.orgchart {
    background-image: none;
}

.orgchart .node .title {
    height: 65px;
    background-color: white;
    color: black;
    border: 1px solid black;
}

.orgchart .node .content {
    height: 0px;
}
</style>