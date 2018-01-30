import React from 'react'

import { Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget } from '../../../components'

import Datatable from '../../../components/tables/Datatable'


export default class Datatables extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs items={['Tạo đơn hàng', 'Danh sách đơn hàng']} icon="fa fa-fw fa-table"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4" />
          <Stats />
        </div>

        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12">
              <JarvisWidget editbutton={false} color="darken">
                <header>
                  <span className="widget-icon"> <i className="fa fa-table" /> </span> <h2>Danh sách đơn hàng</h2></header>
                <div>
                  <div className="widget-body no-padding">
                    <Datatable
                      options={{
                        ajax: 'assets/api/tables/datatables.standard.json',
                        columns: [{ data: "id" }, { data: "name" }, { data: "phone" },
                        { data: "company" }, { data: "zip" },
                        { data: "city" }, { data: "date" }]
                      }}
                      paginationLength={true} className="table table-striped table-bordered table-hover"
                      width="100%">
                      <thead>
                        <tr>
                          <th data-hide="phone">ID</th>
                          <th data-class="expand">
                            <i className="fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs" />
                            Tên
                       </th>
                          <th data-hide="phone"><i
                            className="fa fa-fw fa-phone text-muted hidden-md hidden-sm hidden-xs" />
                            Số điện thoại
                      </th>
                          <th>Địa chỉ</th>
                          <th data-hide="phone,tablet"><i
                            className="fa fa-fw fa-map-marker txt-color-blue hidden-md hidden-sm hidden-xs" />
                            Code
                      </th>
                          <th data-hide="phone,tablet">Thành phố</th>
                          <th data-hide="phone,tablet"><i
                            className="fa fa-fw fa-calendar txt-color-blue hidden-md hidden-sm hidden-xs" />
                            Ngày tạo
                      </th>
                        </tr>
                      </thead>
                    </Datatable>
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>
    )
  }
}