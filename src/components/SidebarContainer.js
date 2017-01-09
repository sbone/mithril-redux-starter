import { connect } from 'mithril-redux';
import SidebarView from './SidebarView';
import { openSidebar, closeSidebar } from '../state/actions';

const mapStateToProps = (state) => ({
  sidebar: state.sidebar
});

const mapDispatchToProps = {
  closeSidebar: closeSidebar,
  openSidebar: openSidebar
};

export const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarView);
