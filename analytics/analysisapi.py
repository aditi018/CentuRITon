from flask import Flask
import plotly.express as px
import pandas as pd
import time
import asyncio
import chart_studio
import chart_studio.plotly as ply

app = Flask(__name__)

start = time.time()
username = "keshab0402"
apiKey = "lrrR5qZDoIB2EENZTemQ"
chart_studio.tools.set_credentials_file(username=username, api_key=apiKey)


async def sleep():
    print(f'Time: {time.time() - start:.2f}')
    await asyncio.sleep(1)


@app.route('/mostfir', methods=['GET'])
def mostFir():
    x = [310084, 288879, 269512, 235846, 232066]
    y = ["Uttar Pradesh", "Maharashtra", "Madhya Pradesh", "Kerela", "Delhi"]

    fig = px.pie(values=x, names=y, color=y,
                 color_discrete_map={'Uttar Pradesh': 'black',
                                     'Maharashtra': 'darkblue',
                                     'Madhya Pradesh': 'royalblue',
                                     'Kerela': 'cyan',
                                     'Delhi': 'lightcyan'})
    ply.plot(fig, filename="MOSTfir", auto_open=False)

    return "true"


@app.route('/murderinup', methods=['GET'])
def murderUp():
    crime = pd.read_csv('01_District_wise_crimes_committed_IPC_2001_2012.csv')
    crime_up = crime[crime['STATE/UT'] == 'UTTAR PRADESH']

    g = pd.DataFrame(crime_up.groupby(['DISTRICT'])[
                     'MURDER'].sum().reset_index())
    g.drop(75, axis=0, inplace=True)

    fig = px.bar(g, x='DISTRICT', y='MURDER',
                 color_discrete_sequence=['blue'])
    ply.plot(fig, filename="upmurder", auto_open=False)

    return "true"


@app.route('/ipcvssl', methods=['GET'])
def ipcVSssl():
    chart_studio.tools.set_credentials_file(username=username, api_key=apiKey)
    crime = pd.read_csv('ipc_sll_crimes.csv')

    crime.drop(29, axis=0, inplace=True)
    crime.drop(37, axis=0, inplace=True)
    crime.drop(38, axis=0, inplace=True)
    fig = px.line(crime, x=crime['State/UT'],
                  y=crime['Persons Arrested - IPC'])

    fig.add_scatter(x=crime['State/UT'],
                    y=crime['Persons Arrested - SLL'], mode='lines')
    ply.plot(fig, filename="ipcandssl", auto_open=False)

    return "true"


if __name__ == '__main__':
    app.run(debug=True)
