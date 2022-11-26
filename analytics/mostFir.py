from flask_restful import reqparse
from flask import Flask, jsonify
from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot
import cufflinks as cf
from plotly.subplots import make_subplots
from plotly.colors import n_colors
import plotly.graph_objects as go
import plotly.express as px
import warnings
import pandas as pd
import numpy as np
import geopandas as gpd
import matplotlib.pyplot as plt
import chart_studio
import chart_studio.tools as tls
import chart_studio.plotly as ply

username = "keshab0402"
apiKey = "lrrR5qZDoIB2EENZTemQ"

chart_studio.tools.set_credentials_file(username=username, api_key=apiKey)

x = [310084, 288879, 269512, 235846, 232066]
y = ["Uttar Pradesh", "Maharashtra", "Madhya Pradesh", "Kerela", "Delhi"]

fig = px.pie(values=x, names=y, color=y,
             color_discrete_map={'Uttar Pradesh': 'lightcyan',
                                 'Maharashtra': 'cyan',
                                 'Madhya Pradesh': 'royalblue',
                                 'Kerela': 'darkblue',
                                 'Delhi': 'black'})
ply.plot(fig, filename="MOSTfir", auto_open=False)
fig.show()
plt.show()
