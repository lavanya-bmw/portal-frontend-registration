/********************************************************************************
 * Copyright (c) 2022 Microsoft and BMW Group AG
 * Copyright (c) 2022 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import * as React from 'react'
import '../styles/unauthorised.css'

class UnauthorisedPage extends React.Component {
  public render() {
    return (
      <div className="wrapper">
        <img src="/registration/Catena-X_Logo_mit_Zusatz_2021.svg" alt="logo" />
        <div className="pageBody">
          <div className="infoBackground">
            <div className="infoContent">
              <div>
                <h1>Access Denied</h1>
                <span>
                  You do not have the required access for this service.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UnauthorisedPage
