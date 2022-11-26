from flask_restful import reqparse
from flask import Flask
from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot
import cufflinks as cf
from plotly.subplots import make_subplots
from plotly.colors import n_colors
import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
import numpy as np
# import plotly.io as pio
import geopandas as gpd
import matplotlib.pyplot as plt
import time
import asyncio
# init_notebook_mode(connected=True)
# pio.renderers.default = "vscode"
app = Flask(__name__)

start = time.time()


async def sleep():
    print(f'Time: {time.time() - start:.2f}')
    await asyncio.sleep(1)


@app.route('/viz', methods=['GET'])
def visual():

    cf.go_offline()
    crime = pd.read_csv('01_District_wise_crimes_committed_IPC_2001_2012.csv')
    # print(crime)

    crime_up = crime[crime['STATE/UT'] == 'UTTAR PRADESH']

    # print(crime_up)

    g = pd.DataFrame(crime_up.groupby(['DISTRICT'])[
                     'MURDER'].sum().reset_index())

    g.drop(75, axis=0, inplace=True)

    fig = px.bar(g, x='DISTRICT', y='MURDER',
                 color_discrete_sequence=['blue'])
    fig.show(renderer='vscode')
    plt.savefig("fig.jpg")
    plt.show()
    return "true"


if __name__ == '__main__':
    app.run(debug=True)
