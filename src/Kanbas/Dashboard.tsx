import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
      <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <hr />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0SDRANDRATEBAQEBMPDQ0QEBAQDw0QGBYXFhcRFRMYICsgGRolHxYXJDEhKCk3Li4uFx8zODMtNygxLisBCgoKDg0OGxAQGy0mHR8rMCsvKzctKy0tKysvLS0rMy4vLi0tLSsrKy4rKy0tLS0tLS8tLS0tLS0rLi0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAQQFBwYDAgj/xABHEAACAQEDBQgNDAEFAQAAAAAAAQIDBAUREiExQVEGBxRTYXGBkRMXIjIzUnOSk6GiscEVFiM0YnKCstHS4fBCJDV0s8Jj/8QAGwEBAQADAQEBAAAAAAAAAAAAAAEDBAUCBgf/xAA0EQEAAQICBwQJBQEBAAAAAAAAAQIDBBEFEhQhMVFxEzJBYRUzNFKBkaGxwSJj0eHwQvH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAPnXrQhFzqSjCEVjKcmoxitrb0FiJmcoSZiIzl5K9d8KyU242eErRJf5L6Ol5zWL6FgbdGDrnvbmrXjKI7u95m274F4TxVPsdFasiGXJdM8U+o2KcHbjjva1WLuTw3NPaN0d4T761VvwzdNdUMDNFm3HCmGKb1yeNUsKpbq8u+rVJfeqTfvZ61aY8HjXq5y+EpN6W3zs9Iik1obXM8CD707faI97Wqx+7VnH3Mk0U8nrXq5yzbPumvGHeWur+OXZPz4mObNueNMPcXrkcKpbmw74lvhgqsadZa8YunN/ijm9kxVYSieG5mpxdccd71V074FhqtRrZVmm+Mz0sfKLRztI1a8LXTw3tmjFUVcdz1cJxklKLUk1ipJ4pramazZfoAAAAAAAAAAAAAAAAAAYN83pSs1CVorPNHNGK76pJ6IR5X/J7t25rq1YeLlyKKdaXH7+v602upl1pYQT+joxb7HTXNrfK/VoOvas024yj5uRcu1XJzn5NWZWNCCAAqAQgBQCEAK3O5zdNabHNdjeXRbxnZ5PuHtcfFlyrpxMN2zTc48ebLavVW+HDk7FdF50bTQjaKEsYS1PNKEtcZLU0cuuiaJyl1KK4rjOGYeXoAAAAAAAAAAAAAAAAcy30bdKVqpWbHuKVPsjW2c216lFdbOngqMqZq5ubjKs6op5PFG403Qdx+4mjOjC1W1ObqJTpUMXGMYPOpTwztvThowefk59/FTE6tHzb9jCxMa1fyeitu467akMnsEab1TpfRyi9ubM+lM16cTcieLYqw1uY4OWbornqWS0ys83lLBSp1MMFUg9EsNTzNNbUdO1ci5TrQ5t23NurVlrDIxoQAoBCAFQCEV67e1veVK28Gk/o7SsnDVGqk3GXSk1y4rYa2Ko1qNbxhs4WvVry8JdbOa6IAAAAAAAAAAAAAAAA5Jvj/wC5z8lT9zOrhPVOVi/WfB5aeh8xtNaXfrFVhKlTnT7yUIyhhoyWk16jg1RMTMS7tMxMRMPsRXM99erB2izQXfxpTc9uTKSyfyyOjgonVmXPxs/qiHhTcaQFAIQAqAQigGZcs3G2WaS0q0UX7cTzc7s9HujvR1h304zrgAAAAAAAAAAAAAAADke+R/uc/JU/czq4T1blYv1nweXNlrPVbld2lWywVCrB1qCfcYPCpSxztRxzNcj26dRq3sNFyc43S2rOJm3GU74b+275VBQfB6FSU8M3ZciEE9ryW2+b1mCnBVZ/qlnqxtOW6HPbwt1WvWnXrSypzeMnoS1JJaklmN+mmKYyho1VTVOcsYqAEIAVAIRQCAZV1fWrP5el+eJ4r7s9HqjvR1f0Acd2AAAAAAAAAAAAAAAAByPfI/3OfkqfuZ1cJ6ty8X6z4PLmy1kAhACgEIAVAIRQCACDKur61Z/L0vzxPNfdno9Ud6Or+gDjuwAAAAAAAAAAAAAAAANDfG5Kx2ms69dTy2lF5M8lYLRmM9vEV0RlDDXh6K5zlhdr67dlX0r/AEPe13HjZLadr27dlX0r/QbXcNktna9u3ZV9K/0Jtdw2S2dr27dlX0r/AEG13DZLZ2vbt2VfSv8AQbXcNktna8u3ZV9K/wBBtdw2W25ffVmjStdoowxyKdapThi8Xkxk0sWdCiqZpiZaFdMRVMQwj08gEAEECsq6vrVn8vS/PE8192ei0d6Or+gTjuwAAAAAAAAAAGnvzdLY7JmrTxqYYqhTwlUfK1oiuVtGa3YrucOHNhuX6LfHjyeMt2+RaG2rPQpwWp1HKpJ8uCwS9Zt04Kn/AKlqVY2r/mGulu9vPx6a5FSXxMmyWmPa7ifPy8+Mh6KI2S0bXcT5+3nxkPRRGyW12q4fP28+Mh6KI2S2bVcPn9efGQ9FEbJbNquJ8/r04yHook2W2bVcPn9enGQ9FEbLbNquHz+vTjIeiiNltrtVxPn9enGQ9FEbLbNquHz/AL04yHook2W2bVcectlpnVqzrVM86k5Tm0sE5N4vMZ4iIjKGGZmZzl8SogAggVAMq6vrVn8vS/PE8192ej1R3o6u83jJqlJxbTzZ1melHzGkq6qMNVVTOU7vvDu2Iia4iWm4VV8eXnM+Y2zEe/V85b/ZUcoOE1fHl5zG2Yj36vnK9lRyhY2yqtE305/ee6cfiaeFc/f7pNm3PgzbNeuqovxL4o6mG0zv1b0fGPzH8fJr3MJ40NnGSaxTxT0NaGd6mqKozpnOJacxMbpUqAADx+7jdW7OuC2ZrhEljOelUIvRm8Z6lq07MdvDYfX/AFVcPu1MTiNT9NPH7OXVJylJyk3KUnjKUm3KT2tvSzp8N0Oa/IRAAVAIQAoBCAFQCEUAgAggVAAGVdP1qz+Xpfniea+7PR6o70dXd708DL8PvR8tpX2Wr4feHew/rIaM+RdJAqAAMy7bZkSyZPuH7L28x1NG46bFepXP6J+k8+nP5tfEWdeM44t6fVuaAa+/rzjZrLVtEs+RHuI+PN5ox6W16zJao16opY7tepTNTiForzqTlUqSypzk5Tk9cnnZ2oiIjKHGmZmc5fMIgAKgEIAUAhACoBCKAQAQQKgAABk3T9as/l6X54nivuz0eqO9HV3i9PAy/D70fL6V9lq+H3h3sN6yGiPkXTQABAoQb26rRlU8Hph3L5tT/uw+t0Vie1sas8ad3w8P95OZiberXnHCWadNrud76l4d1QsieZJ16i5c8Yf+/UdDBUcavg0MbXwp+LwBvNBAAVAIQAoBCAFQCEUAgAggVAAACEVn7nqLnbrLBa7RSx5lNNvqTPFycqJ6PduM6o6u53r4GXPH3o+Y0t7LV8PvDuYb1kNCfIumAQKEECs256uFXJ1STXSs6+PWdXQ93UxGr4VRl8eP8tbFU50Z8m+Pq3McZ3cWrsl52h44qElSjyKMUmvOyus7GGpytQ5GIqzuS0JmYAKgEIAUAhACoBCKAQAQQKgAABCKgHs9666nUtrtTXcWaLwep1ZpxS6E5Pk7naa2Jryp1ebZw1GdWfJ0u+Z4U1HbL1L+o+X01cysxTzn7f6HZwlOdefJpj5h0EChBAqAfSzzwnGWySfRiZsPXqXaauUx93munOmY8nqD7pxXBr2qZVqtE/Gr1Zdc2zuUbqYjycSvfVPWWIenlAIQAoBCAFQCEUAgAggVAAACEVANlcNx2m2VexWeOZP6Sq8ex0ltk9uxaWY7lyKIzl7otzXOUO2XFdFKyWaFmo6I55TffVJvTOXK/UklqObXXNc5y6VFEURlDBvOvlVM2iPcrlet/wB2Hx2lMTF6/lHCnd/P+8nWw9vVo38ZYZzmwAQioAAjJPBW/wCGH1+2OX2LhVSWMm9rbPr3zL8lEIAUAhACoB97FYq9aeRQpzqy1qEXLDleGhcrPNVUUxnMvVNM1TlEPQ2be/vSaxlCnS5KlVY+wpGCcVbhmjC3JZPa1vDjbP59X9h52ujlL3slfkdrW8ONs/n1f2Da6OUmyV+R2tbw42z+fV/YNro5SbLX5Ha0vDjbP59X9hNro8zZK/JO1peHG2fz6v7BtdHmbLX5Ha0vDjbP59X9g2ujzNlr8jtZ3hxtn8+r+wbVR5my1+T6Ud7G2N93XoxW2PZJvqaRJxdPhD1GFq8Zbu7N7SyQalaas67X+K+hpvnSbl7RiqxVU8NzJThaY4zm9nZLJSpQVKjCNOEdEIRUYroRrTMzOctmIiIyhhXheCScKbxeiUlq5FynB0jpOIibVmd/jPLp5/bq3bGHmf1VNQfOt8AhFQABAqEH27Kza7eXjUhySawbWxtH6o+JfgIBQCEAKgHq9xe5CVrfZ6+MLNF4LDNOvJaYxeqO19C2rWv39TdHFs2LGvvng6rYbFRo01SoQjTgtEYrBc72vlObVVNU5y6NNMUxlBWtlOOZvF7FnZo3tIYe1umrOeUb2amzXV4MeV6LVB9LSNCrTdH/ADRPzy/lljCz4y/Pyr9j2v4PHpz9v6/09bL5nyr9j2v4Hpz9v6/0bJ5p8rfY9r+B6c/b+v8ARsnn9D5W+x7X8D05+39f6Nk8/ofK/wBj2v4Hpz9v6/0bJ5/RPlf7HtfwPTn7f1/pdk8/ofK//wA/a/genP2/r/Rsfn9H4ne8tUEudtmOrTlc92iI+Of8LGEjxli17ZUnmlLN4qzI59/H3726qrdyjdH+6s9FmijhDGNNmAIRUAAQKgAiv32NmbspedZy69KeTaa8PFrVY9U2j9WonOmJ8nxFfenqxT0gBCAFQDPuG7JWm10rNHFZcu7kv8ILPKXUnhy4GO5XqUzUyW6NeqKXdLPRp0qcadNKFOnFRjFaIxSOPXXlnVVPnLr005boa2122Us0c0fXLnPlcbpKu9M00bqfrP8AuXzb9qxFO+eLDOW2EAgAKgECgEIoBAIFAIQQKAQKgAioxPAbzgXIfU7E5vbOTbtLP2O87VHbU7IuXLip++TPr7E524fOX4yuS0pmYkIAVAIRXv8AelsadW02hrvIwpQf3m5S/LHrNPGVbopbmDp3zU91etbBKC155c2r+8h8ppnETTTFqPHfPT/37OxhqM51msPnW6gEABUAgUIAVAIBAoBCCBQCBUAEVAP3QhlTjHbJL1mWxRr3aaOcxH1ea6tWmZesPvHDcx31bDk2mjaUs1Sm6cn9qDxWPOpeydHB1fpmnk5+Mpyqirm8MbbTAqAQigHUd6aP+irvW7S11U6f6nPxnfjo38J3Z6/hvrxljVlyYJdR8NpSvWxVXllH0dyxGVEMU57MgAKgAKgAioBAIFAIQQKAQKgAioAAzrlpZVbK1QTfS8y+PUdXQ9nXxGt4Uxn8eEfn5NbF15W8ub0J9Y5TQ7trpdpsFSEFjUp/TUVrco44xXK05LpRmw9zUriZ4MN+3r0ZeLiuJ1nKAIRQCAdT3pvqNb/lS/66Zz8X346OhhO5PX8Q3Vu8LPn+CPg9Ie019fxDu2e5DHNJkAqAAqACKgEAgUAhBAoBAoBCKgACBXo7ps2RSxffS7qXJsX92n1+i8LNiznV3qt8/iP945uTibuvXu4QzTpNYA5Nvg7m3Z6ztVGP+nrSxlhoo1Xpi9kXpXStmPSw17WjVnjDm4izqzrRwl482WuAQAQdT3pvqNf/AJUv+umaGL78dHQwncnr+Ibq3eFnz/A+D0h7TX1/EO7Z7kMc0mVAAVCAFQCAQKAQggUAgUAhFQABArZ3Td7k1Umu5WeKf+T28x2tF6Om5VF65H6Y4Rz8+n36cdPE4jVjUp4/ZvT6dzAAB87RQhUhKnUipwmnGcJLGMk9TRYmYnOEmImMpc13Rb3dWLdSwPskNPB5ywqQ5IyeaS53jzm9bxcTuraNzCzG+h421XbaaTwrUatNrx6c4roeGDNqK6Z4S1poqjjDHyJbH1MqZJkS2PqYzMnUt6dPgNbFYf6qWnydM5+L78dG/hO7PX+G5t/hZ8/wPg9Ie019fxDu2fVwxzTZQKgAioBAPtwOr4kuo2thxPuSx9tb5nA6viS6hsOJ9yV7a3zTgdbxJdQ2DE+5J21vmcDreJLqGwYn3JO2t804HW4uXUNgxPuSdtb5nAq3Fy6hsGJ9yV7a3zhOBVuLl1E2DE+5J21vnBwKtxcuobBifcle3t84TgVbi5dQ2DE+5J29v3oOA1uLl1DYMT7knb2/eh9Kd1V3pio8smvgZ7eicVXxpy6z/GbxVirceObY2S6IRzzeW9mGEV0azr4XQ9q1Otc/VP0+Xj8fk1LuLqq3U7obI7DUAAAAAAAAAADQ2/ws+f4I+N0h7TX1/EOnZ9XDHNNmQARUAgAQPQcOo+OvWfZekcN78OV2FzkcPo+OvWPSOG9+F7C5yOH0fHXrHpHC+/B2FzkcPo+OvWPSOF9+DZ7nI4fR8desekcL78Gz3OR8oUPHXrHpHC+/Bs9zksLbRbUVNNvMlnznqjHYeuqKaa4mZSbFyIzmGQbbEAAAAAAAAAAAAAAAANBb/Cz5/gj43SHtNfX8Q6ln1cMc02UIqAQCBQCEECgECgEIr72Dw1P7yNvAe00dWK/6uro9OfbOMAAAAAAAAAAAAAAAANBb/DT5/gj43SHtNfX8Q6lj1cMc0mVAqAQAFQggUADjuhWxoXRNrGclHkwyn0nZs6Fu10511avlxn8NOvGUxOURm+Nsu2cFlY5UVpazNc6MGL0Xdw9OvnnT9vgyWsTTXOXCWEcxsvvd/hqf3kbeA9po6sV/1dXR6c+2cYAAAAAAAAAAAAAAAAaC8PDT517kfG6RjLFV9fxDqWPVwxjSZkAAQKhBAoBArNuiCdZY6k5Ln0fE6WibcV4mM/CJn4/6Wviqpi3u8XoD65yka1PpJMRMZSPKV4pTlFaFJpdDwPg7tMUXKqY4RMx8pdyic6YnyfS7/DU/vIz4D2mjq8X/AFdXR6g+2cYAAAAAAAAAAAAAAAAai+aOElU1NYPnX99R83pqxNNcXY4Tunr/AOfZv4SvONVrTiNsAgVCCBQAFQD6Wau4TU1q0rataM+GvzYuxcjw+sPFyiK6Zpl6Kha6c1jGS5m8GudH2FjGWb1OdFUdPGPg5Ndquicph8bbeEIReDUp6op44PazXxmkbVimYpmJq5fyyWcPVXO/dDzjetnyEzM75dZmXTTcq8fs4yfR/OBv6LtzXiqfLf8A745MGJq1bU+b0h9i5AAAAAAAAAAAAAAAAA/FalGUXGWhmK9apu0TRXwl6pqmmc4aC2WSVN588dUtT/RnyOLwVzDVb99PhP8AuEunau03I3cWOabMhBAoACoBCAFRgQK/VOnKTUYrFvQkerduu5VFNEZzKVVRTGcvRXbYlTjnzyl3z+CPr9H4KMNRv708Z/DkYi92lXlDMOgwAAAAAAAAAAAAAAAAABJRTWDWKelPOmSqmKoyqjOFiZjfDX2i6YPPB5L2aYnHxGhrVe+3Or5cY/ltUYuqO9vYFW7ay/xylti8fVpOTd0ViaP+c+k/+S2acTbnxyY06cl30WudNGlXauUd6mY6xMM0VUzwl88TFnD2FEIJiM1WKb0JvmWJaaZq7sZkzEcX3p2CtLRB9Pc+827eAxNzhRPx3fdiqv26eMs2hcr01JYckc762dKxoOqd92r4R/M/w168bH/MNpZ7NCCwhHDa9b52dyxhrViMrcZff5tKu5VXOdUvsZ2MAAAAAAAAAAAAAAAAAAAAAAAa22nIxjbstTV0nzt7i36XzgY6OL1LZWQ7eFal1uKehHfo7rn1cX6PaAAAAAAAAAAAAAf/2Q==" alt="reactjs.jpg" width={200} />
           
            <div>
              <h5>
                 CS1224 Python
              </h5>
              <p className="wd-dashboard-course-title">
                Python coding
              </p>
              <button> Go </button>
            </div>
            
          </Link>
        </div>
        <hr />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="data:image/jpeg;base64,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" alt="reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1235 Java
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
         
        </div>
        <hr/>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS2234 Distributed Systems
              </h5>
              <p className="wd-dashboard-course-title">
                Calculations
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <hr />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS3234 Senior Design
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <hr />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1834 Database
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <hr />
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS3334 AI
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
}
